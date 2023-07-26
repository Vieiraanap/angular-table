import { NgModule } from '@angular/core';
import { EnumPipe } from './enum.pipe';


@NgModule({
  declarations: [
    EnumPipe
  ],
  exports: [
    EnumPipe
  ]
})
export class PipesModule { }
