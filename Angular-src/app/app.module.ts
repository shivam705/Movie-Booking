import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminmovielistingComponent } from './adminmovielisting/adminmovielisting.component';
import { EditComponent } from './adminmovielisting/edit/edit.component';
import { BarRatingModule } from 'ngx-bar-rating';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookComponent,
    MybookingComponent,
    AdminmovielistingComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BarRatingModule,
    NgxPaginationModule,
    Ng2OrderModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
