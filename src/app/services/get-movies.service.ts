import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private http: HttpClient) { }

  getKids(): Observable<any>{
    let apiKey = 'api_key=57f0728848723c88b5811f35a0dddf79';
    let baseUrl = 'https://api.themoviedb.org/3';
    let apiUrl = baseUrl + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&' + apiKey;
    return this.http.get<any>(apiUrl);
  }

  getMostPopular(): Observable<any>{
    let apiKey = 'api_key=57f0728848723c88b5811f35a0dddf79';
    let baseUrl = 'https://api.themoviedb.org/3';
    let apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey;
    return this.http.get<any>(apiUrl);
  }

  getNowInTheaters(): Observable<any>{
    let apiKey = 'api_key=57f0728848723c88b5811f35a0dddf79';
    let baseUrl = 'https://api.themoviedb.org/3';
    let apiUrl = baseUrl + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2022-03-24&' + apiKey;
    return this.http.get<any>(apiUrl);
  }

  getAdults(): Observable<any>{
    let apiKey = 'api_key=57f0728848723c88b5811f35a0dddf79';
    let baseUrl = 'https://api.themoviedb.org/3';
    let apiUrl = baseUrl + '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc4&' + apiKey;
    return this.http.get<any>(apiUrl);
  }

  getMovies(query: any): Observable<any>{
    let apiKey = '57f0728848723c88b5811f35a0dddf79&query=';
    let baseUrl = 'http://api.themoviedb.org/3/search/movie?api_key=';
    let apiUrl = baseUrl + apiKey + query;
    return this.http.get<any>(apiUrl);
  }
  
}
