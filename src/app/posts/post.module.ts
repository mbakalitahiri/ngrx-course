import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { PostRoutingModule } from './post-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [NewComponent, EditComponent],
  imports: [CommonModule, PostRoutingModule, ReactiveFormsModule, FormsModule],
})
export class PostModule {}
