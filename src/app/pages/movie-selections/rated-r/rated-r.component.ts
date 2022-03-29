import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-rated-r',
  templateUrl: './rated-r.component.html',
  styleUrls: ['./rated-r.component.css']
})
export class RatedRComponent implements OnInit {

  movies: any[] = [];

  constructor(private getMovieService: GetMoviesService) { }

  ngOnInit(): void {
    this.getMovieService.getAdults().subscribe(data => {
      this.movies = data.results
    })
  }

}
