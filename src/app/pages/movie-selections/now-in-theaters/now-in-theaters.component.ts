import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-now-in-theaters',
  templateUrl: './now-in-theaters.component.html',
  styleUrls: ['./now-in-theaters.component.css']
})
export class NowInTheatersComponent implements OnInit {

  movies: any[] = [];

  constructor(private getMovieService: GetMoviesService) { }

  ngOnInit(): void {
    this.getMovieService.getNowInTheaters().subscribe(data => {
      this.movies = data.results
    })
  }

}
