import { Inject } from '@angular/core'
import { Injectable } from '@angular/core';
import { Album } from 'src/models/album';
import { Albums } from '../../mocks/albums'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

    albumsData: Album[] = Albums;
    boughtAlbums: Album[]=[];
  
    AddBoughtAlbum(i: number){
      this.boughtAlbums.push(this.albumsData[i]);
    }
  
    getBoughtAlbums(){
      return this.boughtAlbums;
    }
  
    getAlbums(){
      return this.albumsData;
    }

    boughtSong(i: number, song: number){
      console.log(i,song);
      this.albumsData[i].songs[song].bought = true;
    }
  
    constructor() { }
  }