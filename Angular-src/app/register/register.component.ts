import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User.model';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userInfo!:User[];
  Userdata:User={
    id:0,
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    contact:0,
    password:'',
    password1:'',
    isAdmin:false,

  };

  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router){

  }

  ngOnInit(): void {
  }




  GetUser(){
    this.serviceservice.getUser().subscribe(
      (response)=>{
        console.log(response);
        //this.userInfo=response;
      }
    );
  }

  onSubmit(){
    if(this.Userdata.firstName!=''&&this.Userdata.lastName!=''&&this.Userdata.email!=''&&(this.Userdata.contact!=0)){
      if(this.Userdata.password==this.Userdata.password1){
      this.serviceservice.addUser(this.Userdata).subscribe(
          (response)=>{
            this.GetUser();

            console.log(this.Userdata);
            this.Userdata={
              id:0,
              firstName:'',
              lastName:'',
              email:'',
              gender:'',
              contact:0,
              password:'',
              password1:'',
              isAdmin:false
            };

            this._router.navigate(['login']);
        }
        )
      }else{
      alert("Please enter same password!");
    }
    }else{
      alert("Enter All Field");
    }
  }

}
