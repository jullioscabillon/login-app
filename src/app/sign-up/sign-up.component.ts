import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';
import {NgbdModalComponent} from '../modal-component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  colors = [
      {name: 'black'},
      {name: 'purple'},
      {name: 'green'},
      {name: 'yellow'},
      {name: 'red'},
      {name: 'wheat'}
  ];

  constructor(private us: UsersService,
              private modalService: NgbdModalComponent) { }

  ngOnInit() {

    console.log('utenti correnti: ', this.us.getUsers());

    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenUsername.bind(this)]),
        'password': new FormControl(null, [Validators.required, this.forbiddenPassword.bind(this)]),
        'age': new FormControl(null, [Validators.required]),
        'color': new FormControl(null, [Validators.required]),
        'name': new FormControl(null, [Validators.required]),
        'surname': new FormControl(null, [Validators.required]),
      })
    });

  }

  onSubmit() {

    console.log(this.signUpForm);
    const f = this.signUpForm.value.userData;

   const user: any = {
     'username': f.username,
     'password': f.password,
     'name': f.name,
     'surname': f.surname,
     'age': f.age,
     'color': f.color,
     properties: {
       role: 'user',
       profiles: ['up_1']
     }
   };

    if (this.us.addUser(user)) {

      this.modalService.open({trovato: false, customMessage: 'User created successfully'});
      console.log('this.us.getUsers(): ', this.us.getUsers());

    }

    this.signUpForm.reset();
  }


  forbiddenUsername(control: FormControl): {[s: string]: boolean} {
    const regex = /[^A-Za-z0-9_]/g;

    if (regex.test(control.value) === true) {
      return {'usernameIsForbidden': true};
    }

    return null;
  }

  forbiddenPassword(control: FormControl): {[s: string]: boolean} {
    const regex = /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])\S{6,}$/;

    if (regex.test(control.value) === false) {
      return {'passwordIncorrect': true};
    }
    return null;

  }

}
