
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/Models/Movie.model';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  message: number | undefined;
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

  fileToUpload: File | null = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
// uploadFileToActivity() {
//   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });
// }
  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router) { }






  ngOnInit(): void {
    this.serviceservice.getMovieByID(this._route.snapshot.params['id']).subscribe((result)=>{
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
  if(this.moviedata.id>0){
    this.serviceservice.onUpdateMovie(this.moviedata,this._route.snapshot.params['id']).subscribe(
      (response)=>{
        this._router.navigate(['adminmovielisting']);
      }
    )

    }else if(this.moviedata.id==0){
    this.serviceservice.onaddMovie(this.moviedata).subscribe(
      (response)=>{
        this.serviceservice.getMovie().subscribe(response=>{

        });
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
        this._router.navigate(['adminmovielisting']);
      }
    )
    }

  }
  logout(){
    this._router.navigate(['login']);
  }

}
