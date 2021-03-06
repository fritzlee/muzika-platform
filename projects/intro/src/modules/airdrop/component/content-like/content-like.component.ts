import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AirdropApi } from '../../airdrop-api';

@Component({
  selector: 'airdrop-content-like',
  template: `
    <div class="title" *ngIf="current === 2">
      {{'airdrop.like.step-title' | translate}} <BR />
      <i class="fas fa-heart"></i> <span class="heart">{{'airdrop.like.heart' | translate}}</span> {{'airdrop.like.heart-desc' | translate}}
    </div>
    <div class="title" *ngIf="current === 3">
      {{'airdrop.like.step-3-title' | translate}} <BR />
      {{'airdrop.like.step-3-title-2' | translate}}
    </div>
    <div class="header mb-3">
      <img [src]="'assets/airdrop/artist/' + selectedArtist.imgPath">
      <div class="name pl-3">
        {{selectedArtist.name}}
      </div>
    </div>
    <div class="content">
      <div class="videoWrapper">
        <iframe *ngIf="videoUrl" [src]="videoUrl" frameborder="0"></iframe>
      </div>
    </div>
    <div class="song-title pt-3 pb-3">
      {{selectedArtist.title}}
      <div class="heart-btn" [class.active]="alreadyLiked" (click)="like()">
        <i class="fal fa-heart"></i> {{'airdrop.like.like-text' | translate}} {{likesCnt + (alreadyLiked ? 0 : -1) | number}}
      </div>
    </div>
    <airdrop-content-comment *ngIf="current === 3" 
                             [musician]="selectedArtist.musician"
                             (addLP)="writeComment($event)"></airdrop-content-comment>
    <airdrop-lp-modal [class.close]="!modalOpen"
                      (addLP)="add($event)"
                      [message]="'airdrop.like.lp-modal-message'| translate" lp="30"></airdrop-lp-modal>
  `,
  styleUrls: [
    '../content.component.scss',
    './content-like.component.scss'
  ]
})
export class AirdropContentLikeComponent implements OnInit, OnChanges {
  @Input() selectedArtist: any;
  @Output() addLP = new EventEmitter<{
    lp: number,
    comment?: string
  }>();
  @Input() current: number;

  alreadyLiked = false;

  videoUrl: any;

  modalOpen = false;

  likesCnt = 0;

  constructor(private domSanitizer: DomSanitizer,
              private api: AirdropApi) {
  }

  like() {
    if (this.current === 2) {
      this.modalOpen = true;
      this.alreadyLiked = true;
    }
  }

  ngOnInit() {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedArtist.video);

    this.api.get<{
      cnt: number,
      musician: string
    }[]>('/subscribe').subscribe(result => {
      result.forEach(artist => {
        if (this.selectedArtist.musician === artist.musician) {
          this.likesCnt = artist.cnt;
        }
      });
    });
  }

  writeComment(event: {
    lp: number,
    comment: string
  }) {
    this.addLP.emit(event);
  }

  add(lp: number) {
    this.addLP.emit({lp});
    this.modalOpen = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const prop in changes) {
      if (prop === 'selectedArtist' && changes[prop].currentValue !== changes[prop].previousValue) {
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedArtist.video);
      }
    }
  }
}
