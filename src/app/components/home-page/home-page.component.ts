import { Component, OnInit } from '@angular/core';
import {JokeService} from '../../service/joke/joke.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
  }

}
