import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public photo: string) {
  }

  ngOnInit() {
    //console.log(this.photo.photoUrl);
  }
}
