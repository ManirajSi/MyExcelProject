import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'; // Import the CardModule from the appropriate module
@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, CardModule], // Remove the extra comma after ButtonModule
  exports: [ButtonModule, CardModule],
})
export class PrimengModule {}
