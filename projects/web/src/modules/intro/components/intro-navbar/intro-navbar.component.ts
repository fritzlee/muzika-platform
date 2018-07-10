import { Component } from '@angular/core';
import { User } from '@muzika/core';
import { BaseComponent, UserActions } from '@muzika/core/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro-navbar',
  templateUrl: './intro-navbar.component.html',
  styleUrls: ['./intro-navbar.component.scss']
})
export class IntroNavbarComponent extends BaseComponent {
  currentUser: User;
  lang: string;

  constructor(private userActions: UserActions, private translateService: TranslateService) {
    super();
  }

  ngOnInit() {
    this._sub.push(
      UserActions.currentUserObs.subscribe(user => {
        this.currentUser = user;
      })
    );

    this.lang = this.translateService.currentLang;

    this._sub.push(
      this.translateService.onLangChange.subscribe(lang => {
        this.lang = this.translateService.currentLang;
      })
    );
  }

  changeLang(lang: 'en' | 'ko' | 'ch') {
    this.translateService.use(lang);
  }

  logout() {
    this.userActions.logout();
  }
}
