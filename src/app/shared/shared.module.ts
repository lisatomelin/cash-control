import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByOrderPipe } from './pipes/sort-by-order.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';




@NgModule({
  declarations: [SortByOrderPipe, LimitToPipe],
    
  
  imports: [
    CommonModule
  ],

  exports: [SortByOrderPipe, LimitToPipe]
  
})
export class SharedModule { }
