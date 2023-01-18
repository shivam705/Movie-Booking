import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Models/Movie.model';
import { ServiceService } from '../Service/service.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieInfo!:Movie[];
  userid: any | undefined;
  movieRating=3;
  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router) { }

  totalLength:any;
  page:number=1;
  movieName:any;

  username:any;
  userId:any;

  ngOnInit(): void {

    this.serviceservice.getMovie().subscribe(
      (response)=>{
        this.movieInfo=response;
        this.totalLength=response.length;
        console.log(this.totalLength);
    }
    );
    this.serviceservice.getUsersByID(this._route.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      this.username=result.firstName;
      this.userId=result.id;
    });
  }


  myBooking(){
    this._router.navigate(['mybooking'+'/'+this.userId]);
  }

  Search(){
    if(this.movieName==""){
    this.ngOnInit();
    }else{
      this.movieInfo=this.movieInfo.filter(res=>{
        return res.movieName.toLocaleLowerCase().match(this.movieName.toLocaleLowerCase());
      })
    }
  }

  gotoBook(id:any){
    this._router.navigate(['book'+'/'+id]);
  }

  logout(){
    this._router.navigate(['login']);
  }


  //this.userid=this.serviceservice.getMessage();
}
