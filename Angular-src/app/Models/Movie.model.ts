import { Time } from "@angular/common";

export interface Movie{
  // id:any;
  // movieName:string,
  // movieDescription:string,
  // movieImage: string,
  // isActive: true
  id:number;
  movieName:string,
  movieDescription:string,
  movieImage: string,
  movieTime:string,
  movieDate:string,
  fare:number;
  maxSeats:number,
  availableSeats:number,
  isActive: true
}
