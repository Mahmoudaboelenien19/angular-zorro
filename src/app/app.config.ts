import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  DesktopOutline,
  HighlightFill,
  HighlightOutline,
  LockOutline,
  PieChartOutline,
  PoweroffOutline,
  SettingFill,
  UpSquareFill,
  UserOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [
  HighlightFill,
  UserOutline,
  UpSquareFill,
  HighlightOutline,
  PoweroffOutline,
  SettingFill,
  PieChartOutline,
  DesktopOutline,
  LockOutline,
];
registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    importProvidersFrom(NzIconModule.forRoot(icons)),
  ],
};
