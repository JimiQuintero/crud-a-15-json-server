import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, CreatecontactComponent, UpdatecontactComponent, LoginComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
