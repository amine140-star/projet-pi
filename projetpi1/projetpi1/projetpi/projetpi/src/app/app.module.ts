import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddcoursComponent } from './cours/addcours/addcours.component';
import { UpdatecoursComponent } from './cours/updatecours/updatecours.component';
import { GetcoursComponent } from './cours/getcours/getcours.component';
import { AddActualiteComponent } from './Actualite/Article/add-actualite/add-actualite.component';
import { AffActualiteComponent } from './Actualite/Article/Affiche-Actualite/aff-actualite.component';
import { UpdateActualiteComponent } from './Actualite/Article/Update-Actualite/update-actualite.component';
import {AffActualiteFComponent} from "./Actualite/ActualiteFront/Affiche-Actualite/aff-actualite.component";
import { AddCommentaireComponent } from './Actualite/ActualiteFront/CommentaireFront/AddCommentaire/add-commentaire.component';
import { UserFrontComponent } from './User/user-front/user-front.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddcoursComponent,
    UpdatecoursComponent,
    GetcoursComponent,
    AffActualiteFComponent,
    AddActualiteComponent,
    AffActualiteComponent,
    UpdateActualiteComponent,
    AddCommentaireComponent,
    UserFrontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
