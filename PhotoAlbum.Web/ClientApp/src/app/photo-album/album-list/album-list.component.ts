import { Component, OnInit } from '@angular/core';
import { PhotoAlbumService } from '../photo-album.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PaginatedAlbum } from '../models/paginated-album';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  paginatedAlbums: PaginatedAlbum
  currentAlbum: Album;
  pageNumber: number = 0;
  itemsPerPage: number = 5;
  userId: number = 1;
  isLoading: boolean;

  userIdControl = new FormControl(1, [
    Validators.required
  ]);



  constructor(private _photoAlbumService: PhotoAlbumService) { }

  ngOnInit() {
    this.getAlbums(this.userId, this.pageNumber, this.itemsPerPage)
  }

  getValidationError() {
    return this.userIdControl.hasError('required') ? 'User Id is required' : '';
  }

  getAlbums(userId: number = this.userIdControl.value, pagenumber: number = 0, itemsPerPage: number = 5) {
    this._photoAlbumService.getAlbums(userId, pagenumber, itemsPerPage).subscribe(result => {
      if (result != null) {

        this.paginatedAlbums = result;
        this.currentAlbum = this.paginatedAlbums.albums[0];
        this.isLoading = false;
      }
    });
  }
  setAlbum(album: Album) {
    this.currentAlbum = album;
  }

  onNextClick() {
    if (!this.isLoading) {
      this.pageNumber += 1;
      this.getAlbums(this.userId, this.pageNumber, this.itemsPerPage)
      this.isLoading = true;
    }

  }
  onPreviousClick() {
    if (!this.isLoading) {
      this.pageNumber -= 1;
      this.getAlbums(this.userId, this.pageNumber, this.itemsPerPage)
      this.isLoading = true;
    }
  }
}

