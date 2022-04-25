import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MyresumeComponent } from './myresume/myresume.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'myresume', component: MyresumeComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
