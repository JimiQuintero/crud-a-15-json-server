import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
})
export class AddcontactComponent implements OnInit {
  _router = inject(Router);
  _formBuilder = inject(FormBuilder);
  _contactService = inject(ContactService);

  //contactform!: FormGroup;
  contactform: FormGroup | any;

  constructor() {}

  ngOnInit(): void {
    this.contactform = this._formBuilder.group({
      firtsname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  goToContactList() {
    this._router.navigate(['/home']);
  }

  submitContact(contacto: Contact) {
    //console.log(this.contactform.value);
    this._contactService.addContact(contacto).subscribe((resp) => {
      this.contactform.reset();
      this._router.navigate(['/home']);
    });
  }
}
