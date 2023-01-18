import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Models/Movie.model';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-adminmovielisting',
  templateUrl: './adminmovielisting.component.html',
  styleUrls: ['./adminmovielisting.component.css']
})
export class AdminmovielistingComponent implements OnInit {

  movieInfo!:Movie[];
  moviedata:Movie={
    id:0,
    movieName:'',
    movieDescription:'',
    movieImage:'',
    movieTime:'',
    movieDate:'',
    fare:0,
    maxSeats:100,
    availableSeats:100,
    isActive:true
  };
  studentservices: any;


  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router){

  }

  username:any;

  ngOnInit(): void {
    this.GetMovie();
    this.serviceservice.getUsersByID(this._route.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      this.username=result.firstName;
    });

  }

  gotohome(){
    this._router.navigate(['adminmovielisting']);
  }

  GetMovie(){
      this.serviceservice.getMovie().subscribe(
        (response)=>{
          this.movieInfo=response;
      }
      );

  }
  addrecord(){
    this._router.navigate(['adminmovielisting/edit'+'/'+this.moviedata.id]);

  }

  populateFrom(item:Movie,id:any){
    this.serviceservice.onUpdateMovie(item,id).subscribe(response=>
      {
      this.moviedata=item;
      this._router.navigate(['adminmovielisting/edit'+'/'+this.moviedata.id]);

      //this.studentdata=this.studentdata.filter(item=>item.id==id);
    });
  }
  ondelete(id:any){
    this.serviceservice.onDeleteMovie(id).subscribe(response=>
      {
      this.movieInfo=this.movieInfo.filter(item=>item.id!==id);
      this.GetMovie();
      this.moviedata={
        id:0,
        movieName:'',
        movieDescription:'',
        movieImage:'',
        movieTime:'',
        movieDate:'',
        fare:0,
        maxSeats:100,
        availableSeats:100,
        isActive:true
      };
    });

  }

  logout(){
    this._router.navigate(['login']);
  }


}
