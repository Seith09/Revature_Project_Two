import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { KidsComponent } from './pages/movie-selections/kids/kids.component';
import { MovieSearchComponent } from './pages/movie-selections/movie-search/movie-search.component';
import { NowInTheatersComponent } from './pages/movie-selections/now-in-theaters/now-in-theaters.component';
import { RatedRComponent } from './pages/movie-selections/rated-r/rated-r.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'now-in-theaters', component: NowInTheatersComponent},
  {path: 'adults', component: RatedRComponent},
  {path: 'register', component: UserCreateComponent},
  {path: 'search', component: MovieSearchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ProfileComponent, 
KidsComponent, NowInTheatersComponent, RatedRComponent, UserCreateComponent, MovieSearchComponent]