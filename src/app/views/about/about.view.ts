import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}

@Component({
  selector: 'about-view',
  templateUrl: './about.view.html',
  styleUrls: ['./about.view.css']
})
export class AboutView implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events = [
    {
      id: 0,
      title: 'South Korea',
      content: 'I was born and raised in South Korea for the first 13 years of my life.',
      date: '1997-2010',
      icon: 'assets/images/southKoreaFlag.png'
    },
    {
      id: 1,
      title: 'Moved to USA',
      content: 'I moved to the states when I was 13 and finished middle school and high school.',
      date: '2010 - 2016',
      icon: 'assets/images/americanFlag.png'
    },
    {
      id: 2,
      title: 'Volleyball',
      content: 'I played volleyball for school team from 8th - 12th grade.',
      date: '2011-2016',
      icon: 'assets/images/volleyball.png'
    },
    {
      id: 3,
      title: 'SJSU',
      content: 'I am currently attending San Jose State University',
      date: '2020-',
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    }
  ];

  tiles: Tile[] = [
    {text: '', cols: 3, rows: 4, color: 'lightgreen', image: 'assets/images/ocean.jpg'},
    {text: 'Here are some of my favorite photos of/from my interests and hobbies :)', cols: 1, rows: 8, color: 'lightblue', image: ''},
    {text: '', cols: 1, rows: 4, color: 'lightpink', image: 'assets/images/volleyball.jpg'},
    {text: '', cols: 2, rows: 4, color: '#DDBDF1', image: 'assets/images/hiking.jpg'},
  ];
}
