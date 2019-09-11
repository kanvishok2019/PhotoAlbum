import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { ApiService } from '../services/api.services';
import { PhotoAlbumService } from './photo-album.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AlbumListComponent, AlbumComponent, PhotoComponent],
  imports: [
    CommonModule,
    PhotoAlbumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
    ApiService,
    PhotoAlbumService
  ],
  entryComponents:[PhotoComponent]
})
export class PhotoAlbumModule { }
