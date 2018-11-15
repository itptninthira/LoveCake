import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';
import { Page4Page } from '../page4/page4';
import { Page5Page } from '../page5/page5';
import { Page11Page } from '../page11/page11';
import { Page22Page } from '../page22/page22';
import { Page33Page } from '../page33/page33';
import { Page44Page } from '../page44/page44';
import { Page55Page } from '../page55/page55';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
