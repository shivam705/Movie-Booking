import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Models/Movie.model';
import { MovieSlot } from '../Models/MovieSlot.model';
import { User } from '../Models/User.model';
import { UserMovieBook } from '../Models/UserMovieBook.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getAuthStatus() {
    throw new Error('Method not implemented.');
  }

  readonly baseUri="https://localhost:44357/api/User";

  readonly LoginUri="https://localhost:44357/api/Login";

  readonly MovieUri="https://localhost:44357/api/MovieListing";

  readonly MovieSlotUri="https://localhost:44357/api/MovieSlot";

  readonly userMoviebookUri="https://localhost:44357/api/UserMovieBook";
  constructor(private http:HttpClient) { }



  public userid: any | undefined;
  setMessage(data: any){
    this.userid=data;
  }
  getMessage(){
    this.userid;
  }


  //login
  getUsersByEmail(email: string):Observable<User> {
    return this.http.get<User>(this.LoginUri+'/'+email);
  }


  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseUri);
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseUri,user);
  }

  onDelete(id:number):Observable<User>{
    return this.http.delete<User>(this.baseUri+'/'+id);
  }

  onUpdate(user:User,id:number){
    return this.http.put<User>(this.baseUri+'/'+id,user);;
  }

  getUsersByID(id: number):Observable<User> {
    return this.http.get<User>(this.baseUri+'/'+id);
  }


  //Movie
  getMovie():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.MovieUri);
  }

  onaddMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.MovieUri,movie);
  }

  onDeleteMovie(id:any):Observable<Movie>{
    return this.http.delete<Movie>(this.MovieUri+'/'+id);
  }

  onUpdateMovie(movie:Movie,id:number){
    return this.http.put<Movie>(this.MovieUri+'/'+id,movie);
  }

  getMovieByID(id:any):Observable<Movie>{
    return this.http.get<Movie>(this.MovieUri+'/'+id);
  }


  //MovieSlot

  getMovieSlot():Observable<MovieSlot[]>{
    return this.http.get<MovieSlot[]>(this.MovieSlotUri);
  }

  getMovieSlotByMovieID(id:number):Observable<MovieSlot>{
    return this.http.get<MovieSlot>(this.MovieSlotUri+'/'+id);
  }


  //MovieBook
  onMovieBook(moviebook:UserMovieBook):Observable<UserMovieBook>{
    return this.http.post<UserMovieBook>(this.userMoviebookUri,moviebook);
  }
}
