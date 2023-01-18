import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../Models/Login.model';
import { User } from '../Models/User.model';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userInfo!:User[];
  // Userdata:User={
  //   id:0,
  //   firstName:'',
  //   lastName:'',
  //   email:'',
  //   gender:'',
  //   contact:0,
  //   password:'',
  //   password1:'',
  //   isAdmin:false,
  // };
  UserLogin:Login={
    email:'',
    password:''

  }

  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router,private fb:FormBuilder){

  }

  Form:FormGroup | undefined;
  loginMode:boolean=true;
  ngOnInit(): void {
    this.Form=this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
  }

  userid: any | undefined;
  GetUser(email:string,password:string){
    if(this.UserLogin.email=='' || this.UserLogin.password==''){
      alert('Enter value of all field');
    }
    this.serviceservice.getUsersByEmail(email).subscribe(
      (response)=>{
        console.log(response.firstName);
            if(response.isAdmin && this.UserLogin.email==response.email && this.UserLogin.password==response.password){
            this.userid=response.id;
           // postMessage(this.userid);
            this._router.navigate(['adminmovielisting'+'/'+response.id]);

            }else if(response.isAdmin==false && this.UserLogin.email==response.email && this.UserLogin.password==response.password){
            this.userid=response.id;
            //postMessage(this.userid);
            this._router.navigate(['home'+'/'+response.id]);

            }else{
            alert('please Enter valid Email and Password');
            }


      }

      );
  }

  gotoRegister():void{
    this._router.navigate(['/register']);

  }

}
