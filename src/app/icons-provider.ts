import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
  DesktopOutline,
  EyeOutline,
  HighlightFill,
  HighlightOutline,
  LockOutline,
  MailOutline,
  PieChartOutline,
  PoweroffOutline,
  SettingFill,
  UpSquareFill,
  UserOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons = [
  HighlightFill,
  UserOutline,
  UpSquareFill,
  HighlightOutline,
  PoweroffOutline,
  SettingFill,
  PieChartOutline,
  DesktopOutline,
  LockOutline,
  EyeOutline,
  MailOutline,
];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
