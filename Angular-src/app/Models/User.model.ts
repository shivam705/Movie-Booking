import { DecimalPipe } from "@angular/common";
import { FormGroupDirective } from "@angular/forms";

export interface User{

  id:number;
  firstName:string;
  lastName:string;
  email:string;
  gender:string;
  contact:number;
  password:string;
  password1:string;
  isAdmin:boolean;


       // public Guid Email { get; set; }

}
