import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-now-in-theaters',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  movies: any[] = [];

  constructor(private getMoviesService: GetMoviesService) { }

  ngOnInit(): void {
    this.getMoviesService.getKids().subscribe(data => {
      this.movies = data.results
    })
  }

}
