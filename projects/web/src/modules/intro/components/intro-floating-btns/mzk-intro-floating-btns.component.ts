import { Component } from '@angular/core';
import { BaseComponent } from '@muzika/core/angular';


@Component({
  selector: 'intro-floating-btns',
  template: `
    <a href="https://github.com/MuzikaFoundation" target="_blank"> 
        <span class="fa-stack fa-2x">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fab fa-github fa-stack-1x fa-inverse"></i>
        </span>
    </a>
    <a href="https://medium.com/muzika-official" target="_blank"> 
        <span class="fa-stack fa-2x">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fab fa-medium fa-stack-1x fa-inverse"></i>
        </span>
    </a>
    <a href="https://t.me/muzika_english" target="_blank"> 
        <span class="fa-stack fa-2x">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fab fa-telegram fa-stack-1x fa-inverse"></i>
          <span class="lang">EN</span>
        </span>
    </a>
    <a hre="https://t.me/muzika_korean" target="_blank"> 
        <span class="fa-stack fa-2x">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fab fa-telegram fa-stack-1x fa-inverse"></i>
          <span class="lang">KR</span>
        </span>
    </a>
    <a href="https://twitter.com/muzika_official" target="_blank"> 
        <span class="fa-stack fa-2x">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
        </span>
    </a>
  `,
  styleUrls: [
    './mzk-intro-floating-btns.component.scss'
  ]
})
export class MzkIntroFloatingBtnsComponent extends BaseComponent {

}
