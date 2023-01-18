import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export interface MovieSlot{

  id:number;
  movieId:number;
  movieTime:string;
  fare:number;
  movieDate:string;
  maxSeats:number;
  availableSeats:100;
}
