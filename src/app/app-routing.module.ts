import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJokeComponent } from './add-joke/add-joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: JokeListComponent },
  { path: 'add', component: AddJokeComponent, canActivate: [AngularFireAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
