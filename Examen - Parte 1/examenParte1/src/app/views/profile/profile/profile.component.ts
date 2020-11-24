import { Component, OnInit } from '@angular/core';
import { Album } from 'src/models/album';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
