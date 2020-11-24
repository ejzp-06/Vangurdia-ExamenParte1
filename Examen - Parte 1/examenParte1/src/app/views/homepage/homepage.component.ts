import { Component, OnInit, Inject } from '@angular/core';
import { AlbumService } from '../../services/albums/albums';
import { Album } from 'src/models/album';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {


  displayedColumns: string[] = ['position', 'nombre', 'artista', 'actions'];
  albums: Album[];
  dataSource: any;

  constructor(private dialog: MatDialog,private albumService: AlbumService) { }

  onClick(i: number){
    console.log("llamada");
    this.albums[i].bought = true;
    this.albumService.AddBoughtAlbum(i);
  }

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
    this.dataSource = this.albums;
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(detailDialog, {
      width: '70%',
      data:{
        album: this.albums[i],
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
  templateUrl: './detail/detail.html',
  styleUrls: ['./detail/detail.css']
})
export class detailDialog implements OnInit{

  duration: number;

  constructor(
    public dialogRef: MatDialogRef<HomepageComponent>,
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
