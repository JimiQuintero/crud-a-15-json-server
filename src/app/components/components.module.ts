import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ContactlistComponent } from './contactlist/contactlist.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ModifycontactComponent } from './modifycontact/modifycontact.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

@NgModule({
  declarations: [
    ContactlistComponent,
    AddcontactComponent,
    ModifycontactComponent,
    LoginSignupComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    ContactlistComponent,
    AddcontactComponent,
    ModifycontactComponent,
    LoginSignupComponent,
  ],
})
export class ComponentsModule {}
