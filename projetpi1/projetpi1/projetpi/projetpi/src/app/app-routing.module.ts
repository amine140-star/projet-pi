import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AdminComponent } from './admin/admin.component';
import { UserFrontComponent } from './User/user-front/user-front.component';

import { AddcoursComponent } from './cours/addcours/addcours.component';
import { UpdatecoursComponent } from './cours/updatecours/updatecours.component';
import { GetcoursComponent } from './cours/getcours/getcours.component';
import {AddActualiteComponent} from "./Actualite/Article/add-actualite/add-actualite.component";
import {AffActualiteComponent} from "./Actualite/Article/Affiche-Actualite/aff-actualite.component";
import {UpdateActualiteComponent} from "./Actualite/Article/Update-Actualite/update-actualite.component";
import {AffActualiteFComponent} from "./Actualite/ActualiteFront/Affiche-Actualite/aff-actualite.component";
import {
  AddCommentaireComponent
} from "./Actualite/ActualiteFront/CommentaireFront/AddCommentaire/add-commentaire.component";

const routes: Routes = [
  { path: 'dashboard', component: UserFrontComponent },
  { path: 'addcour', component: AddcoursComponent},
  { path: 'AjoutArtcile', component: AddActualiteComponent},
  { path: 'AfficherArtcile', component: AffActualiteComponent},
  { path: 'edit-actualite/:id', component: UpdateActualiteComponent},
  { path: 'AfficherArtcileF', component: AffActualiteFComponent},
  { path: 'AjoutCommentaire/:id', component: AddCommentaireComponent},


  { path: 'update/:id', component : UpdatecoursComponent},
  { path: 'affichercours', component : GetcoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
