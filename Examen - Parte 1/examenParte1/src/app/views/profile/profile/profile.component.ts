import { Component, OnInit, Inject } from '@angular/core';
import { Album } from 'src/models/album';
import { AlbumService } from '../../../services/albums/albums'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public AlbumService: AlbumService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBoughtAlbums();
  }

  getBoughtAlbums(){
    this.boughtAlbums = this.AlbumService.getBoughtAlbums();
    this.datasource = this.boughtAlbums;
  }

  boughtAlbums: Album[];

  displayedColumns: string[] = ['position', 'nombre', 'artista', 'actions'];
  datasource: any;

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(detailDialog, {
      width: '70%',
      data: {
        album: this.boughtAlbums[i],
        index: i
      }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}

@Component({
  selector: 'detail-select',
  templateUrl: '../detail/detail.html',
  styleUrls: ['../detail/detail.css']
})
export class detailDialog implements OnInit{

  duration: number;

  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    public albumService: AlbumService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(){
    console.log(this.data);
    this.duration = 0;
    this.data.album.songs.forEach(element => {
      this.duration += element.duration;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  buySong(i: number){
    this.albumService.boughtSong(this.data.index, i);
  }


  displayedColumns: string[] = ['position', 'nombre', 'artista', 'popularidad','duracion','precio'];
  dataSource = this.data.album.songs;

}