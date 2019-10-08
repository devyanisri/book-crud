import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CommentComponent } from './comment/comment.component';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';


const routes: Routes = [
  {path :'' , pathMatch:'full',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'list/edit/:id', component:EditComponent},
  {path:'list/delete/:id', component:DeleteComponent},
  {path:'list/comment/:id', component:CommentComponent},
  {path:'list/view/:id',component:ViewcommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
