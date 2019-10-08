import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CommentComponent } from './comment/comment.component';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    CommentComponent,
    ViewcommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
