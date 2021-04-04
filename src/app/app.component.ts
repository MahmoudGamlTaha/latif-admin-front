import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './shared/base/services/translate.service';
import { locale as enLang } from './shared/base/config/translate/en';
import { locale as arLang } from './shared/base/config/translate/ar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translateService: TranslationService) {
    this.translateService.loadTranslations(enLang, arLang);
  }
}
