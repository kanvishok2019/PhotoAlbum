import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from "./album-list/album-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'albumlist',
    pathMatch: 'full'
  },
  {
    path: 'albumlist',
    component: AlbumListComponent,
    pathMatch: 'full'
  }
  //, {
  //  path: 'albums/details/:id',
  //  component: ProductDetailsComponent,
  //  pathMatch: 'full'

  //}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoAlbumRoutingModule { }
