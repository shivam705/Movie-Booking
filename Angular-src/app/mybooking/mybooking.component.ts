import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Models/Movie.model';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  movieInfo!:Movie[];
  starRating = 3;

  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.serviceservice.getUsersByID(this._route.snapshot.params['id']).subscribe((result)=>{
      console.log(result);


    });
    this.serviceservice.getMovie().subscribe(
      (response)=>{
        this.movieInfo=response;
    }
    );
  }


  logout(){
    this._router.navigate(['login']);
  }

  myBooking(){
    this._router.navigate(['mybooking']);
  }
}
