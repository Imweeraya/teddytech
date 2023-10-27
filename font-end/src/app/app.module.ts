import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Board} from './components/board/board.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Signin } from './components/signin/signin.component';
import { ModelModule } from './models/userModel/model.module';
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Board,
    Signin,
    EditActivity,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    ModelModule,
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
