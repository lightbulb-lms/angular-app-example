import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {JokeResponse} from './model/joke-response';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {

  constructor(private http: HttpClient) { }

  getOneRandomJoke(): Observable<JokeResponse> {
    return this.http.get<JokeResponse>('https://sv443.net/jokeapi/v2/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart');
  }
}
