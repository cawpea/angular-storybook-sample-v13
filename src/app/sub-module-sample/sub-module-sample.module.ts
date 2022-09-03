import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HelloComponent], // NOTE: モジュールのコンポーネントを登録
  exports: [HelloComponent], // NOTE: サブモジュールを他のモジュールから利用する場合のみ必要
})
export class SubModuleSample {}
