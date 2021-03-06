import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AirdropApi } from '../../airdrop-api';


@Component({
  selector: 'airdrop-event',
  template: `
    <app-intro-navbar [stickOnTop]="true"></app-intro-navbar>
    <div class="container">
      <airdrop-my-wallet [(loyaltyPoint)]="lp" [(mzk)]="mzk"></airdrop-my-wallet>

      <h3 class="pt-5 pb-2 pb-sm-3">{{'airdrop.event.title' | translate}}</h3>

      <p class="pb-4 pb-sm-5">
        {{'airdrop.event.desc-1' | translate}}<BR/>
        {{'airdrop.event.desc-2' | translate}}
      </p>
      <airdrop-breadcrumb [(current)]="contentStep"></airdrop-breadcrumb>

      <airdrop-end-event *ngIf="contentStep === -1"></airdrop-end-event>
      <airdrop-content-subscribe *ngIf="contentStep === 1"
                                 (selectedArtist)="artistSubscribe($event)"
                                 (addLP)="next(2, $event)"></airdrop-content-subscribe>
      <airdrop-content-like *ngIf="contentStep >= 2 && contentStep <= 3"
                            [(current)]="contentStep"
                            [(selectedArtist)]="selectedArtist"
                            (addLP)="nextWithHandling(contentStep + 1, $event)"></airdrop-content-like>
      <airdrop-content-exchange [randomCode]="randomCode" [secretKey]="secretKey"
                                (changeBudget)="changeBudget($event)"
                                [lp]="lp" *ngIf="contentStep === 4"></airdrop-content-exchange>
      <p class="small pt-4">
        {{'airdrop.event.warning-message' | translate}}
      </p>
    </div>
  `,
  styleUrls: [
    './event.component.scss'
  ]
})
export class AirdropEventComponent implements OnInit, OnDestroy {
  contentStep = -1;
  lp = 0;
  mzk = 0;
  selectedArtist;

  randomCode: string;
  secretKey: string;
  participantCnt: number;

  @HostBinding('class.use-font-family')
  useFontFamily = true;

  private _sub: Subscription[] = [];
  private _maximumParticipants = 19961;
  constructor(private api: AirdropApi,
              private translateService: TranslateService) {
  }

  artistSubscribe(artist) {
    this.selectedArtist = artist;
    console.log(artist);
    this.api.post<string>('/subscribe', {
      secret_key: this.secretKey,
      musician: artist.musician
    }).subscribe(new_secret_key => {
      this.secretKey = new_secret_key;
    });
  }

  nextWithHandling(step, event) {
    if (event.lp) {
      this.next(step, event.lp);
    }
    if (event.comment) {
      this.api.post<string>('/comment', {
        secret_key: this.secretKey,
        content: event.comment
      }).subscribe(res => {
        this.secretKey = res;
      });
    }
  }

  next(step, gainedLP) {
    this.contentStep = step;
    this.lp = this.lp + +gainedLP;
  }

  changeBudget(budget: { lp: number, mzk: number }) {
    this.lp = budget.lp;
    this.mzk = budget.mzk;
  }

  ngOnInit(): void {
    this.api.get<{ random_code: string, secret_key: string, participant_cnt: number }>('/start')
      .subscribe(result => {
        this.randomCode = result.random_code;
        this.secretKey = result.secret_key;
        this.participantCnt = result.participant_cnt;

        if (this._maximumParticipants <= this.participantCnt) {
          this.contentStep = -1;
        }
      });

    this.useFontFamily = this.translateService.currentLang !== 'zh';
    this._sub.push(
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.useFontFamily = event.lang !== 'zh';
      })
    );
  }

  ngOnDestroy() {
    this._sub.forEach(sub => sub.unsubscribe());
    this._sub = [];
  }
}
