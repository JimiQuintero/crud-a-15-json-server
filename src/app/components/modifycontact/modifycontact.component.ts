import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-modifycontact',
  templateUrl: './modifycontact.component.html',
  styleUrls: ['./modifycontact.component.css'],
})
export class ModifycontactComponent implements OnInit {
  public contactid!: number;

  public contactdata: Contact = {} as Contact;

  _contactService = inject(ContactService);
  _activateRoute = inject(ActivatedRoute);
  _route = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((param: Params) => {
      this.contactid = param['id'];
    });
    this._contactService
      .fetchdata(this.contactid)
      .subscribe((data: Contact) => {
        this.contactdata = data;
        console.log(data);
      });
  }

  update() {
    this._contactService
      .updateContact(this.contactdata, this.contactid)
      .subscribe((resp: Contact) => {
        alert('Contact updated successfully..!');
        this._route.navigate(['/home']);
      });
  }

  backToContactList() {
    this._route.navigate(['/home']);
  }
}
