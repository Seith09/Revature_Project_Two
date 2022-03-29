import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieCardsComponent } from './components/movie-cards/movie-cards.component';
import { HomepageTrailerComponent } from './components/homepage-trailer/homepage-trailer.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MovieComponent } from 'src/app/components/movie/movie.component';
import { NowInTheatersComponent } from './pages/movie-selections/now-in-theaters/now-in-theaters.component';
import { RatedRComponent } from './pages/movie-selections/rated-r/rated-r.component';
import { KidsComponent } from './pages/movie-selections/kids/kids.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { MovieSearchComponent } from 'src/app/pages/movie-selections/movie-search/movie-search.component';
import { MovieNavComponent } from './components/movie-nav/movie-nav.component';
 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    MovieCardsComponent,
    HomepageTrailerComponent,
    AdBannerComponent,
    LoginComponent,
    ProfileComponent,
    MovieComponent,
    NowInTheatersComponent,
    RatedRComponent,
    KidsComponent,
    UserListComponent,
    UserCreateComponent,
    MovieSearchComponent,
    MovieNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
