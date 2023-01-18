import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Models/Movie.model';
import { UserMovieBook } from '../Models/UserMovieBook.model';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

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

  userMovieBook:UserMovieBook={
    id: 0,
    movieSlotId: 0,
    seatNos: '',
    userId: 0,
    isActive: true,
    noOfTickets: 0,
    bookingDate: '',//"2022-05-26T04:14:55.583Z",
    rating: 3
  }

  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.serviceservice.getMovieByID(this._route.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      console.log(result);
      this.moviedata={
        id:result.id,
        movieName:result.movieName,
        movieDescription:result.movieDescription,
        movieImage:result.movieImage,
        movieDate:result.movieDate,
        movieTime:result.movieTime,
        fare:result.fare,
        availableSeats:result.availableSeats,
        maxSeats:result.maxSeats,
        isActive:result.isActive
      };
    });
  }

  onSubmit(){
    this.userMovieBook.movieSlotId=this.moviedata.id;
    this.userMovieBook.bookingDate=this.moviedata.movieDate//"2022-05-26T04:14:55.583Z";
    this.userMovieBook.userId=2;
    this.userMovieBook.seatNos="1,2,3,4,5";
    this.serviceservice.onMovieBook(this.userMovieBook).subscribe((result)=>{
      console.log(result,"data updated successfull");
      this._router.navigate(['home']);
    })
  }

  logout(){
    this._router.navigate(['login']);
  }

}
