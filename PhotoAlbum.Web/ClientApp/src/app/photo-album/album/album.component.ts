import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/album';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;
  @Input() page: Album;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showPhoto(photoUrl) {
    this.dialog.open(PhotoComponent, {
      data: {
        photoUrl: photoUrl
      }
    });
  }
}
