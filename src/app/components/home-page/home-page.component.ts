import { Component, OnInit } from '@angular/core';
import {JokeService} from '../../service/joke/joke.service';
import {JokeResponse} from '../../service/joke/model/joke-response';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  jokeOfTheDay: JokeResponse;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
  }

}
