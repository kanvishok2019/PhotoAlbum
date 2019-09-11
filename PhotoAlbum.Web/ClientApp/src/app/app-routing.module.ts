import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoAlbumModule } from './photo-album/photo-album.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'albumlist',
    pathMatch: 'full'
  }, {
    path: 'albumlist',
    loadChildren: './photo-album/photo-album.module#PhotoAlbumModule'
  },];
@NgModule({
  imports: [RouterModule.forRoot(routes), PhotoAlbumModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
