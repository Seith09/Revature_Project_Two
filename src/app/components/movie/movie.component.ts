import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: any[] = [];

  constructor(private getMovieService: GetMoviesService) { }

  ngOnInit(): void {
    this.getMovieService.getMostPopular().subscribe(data => {
      this.movies = data.results
    })
  }

}
