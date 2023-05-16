import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
})
export class ContactlistComponent implements OnInit {
  _router = inject(Router);
  _contactoService = inject(ContactService);

  public contacts: any = [];

  constructor() {}

  ngOnInit(): void {
    this.getcontact();
  }

  //GET
  getcontact() {
    this._contactoService.getAllContact().subscribe((resp) => {
      //console.log(resp);
      this.contacts = resp;
    });
  }

  //DELETE
  delete(id: number) {
    this._contactoService.deleteContact(id).subscribe((resp) => {
      alert('Contact deleted successfully!!');
      this.getcontact();
    });
  }

  goToAddContact() {
    this._router.navigate(['addcontact']);
  }
  goToUpdateContact(id: number) {
    this._router.navigate([`updatecontact/${id}`]);
  }
}
