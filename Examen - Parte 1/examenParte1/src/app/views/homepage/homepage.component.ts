import { Component, OnInit } from '@angular/core';
import { Album } from 'src/models/album';
import { Song } from 'src/models/song';
import { SongList } from 'src/models/song-list';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
    

  Albums: Album[] = [
    {id: 0, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ]},
    {id: 1, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ]},
    {id: 2, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 3, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 4, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 5, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 6, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 7, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 8, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 9, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },
    {id: 10, name: 'Hydrogen', author: 'test', price: 10, launchDate: '11/22/2020',description: 'generic', genre: 'rock', points: 10, songs: 
    [
      {id: 0, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 1, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 2, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 3, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
      {id: 4, name:"test", author: "test", popularity: 10, price: 10, duration: 10},
    ] },

  ];


  displayedColumns: string[] = ['position', 'nombre', 'artista', 'actions'];
  dataSource = this.Albums;

  constructor() { }

  onClick(id: number){

  }

  ngOnInit(): void {

  }

}

