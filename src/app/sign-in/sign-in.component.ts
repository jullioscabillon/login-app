import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import { NgbdModalComponent } from '../modal-component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  signInForm: FormGroup;

  constructor(private us: UsersService,
              private router: Router,
              private modalService: NgbdModalComponent,
              private cd: ChangeDetectorRef
               ) {}

  ngOnInit() {

    console.log(this.us.getUsers());

    this.signInForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required])
      })
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  signIn() {

    console.log(this.signInForm);
    const f = this.signInForm.value.userData;
    const u = this.us.checkUser(f.username, f.password);

    if (u === false) { this.modalService.open({trovato: false, customMessage: 'User or password not found'}); } else {

      const user = {
        name: u.name,
        surname: u.surname,
        role: u.properties.role,
        color: u.color,
        age: u.age,
        trovato: true
      };

      setTimeout(() => {
        this.modalService.open(user);
      });

      /*setTimeout(() => {
        this.signInForm.reset();
      }, 3000);*/
    }

    }

  signUp() {
    this.router.navigate(['/signup']);

  }

}
