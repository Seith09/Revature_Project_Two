import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { Movie } from 'src/app/models/movie'

@Component({
  selector: 'app-search-results',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  
  constructor(private getMoviesService: GetMoviesService) { }

  movies: any[] = [];
  movie = new Movie;


  ngOnInit(): void {
    this.getMoviesService.getMovies(this.movie.search).subscribe(data => {
      this.movies = data.results
    })
  }
}
