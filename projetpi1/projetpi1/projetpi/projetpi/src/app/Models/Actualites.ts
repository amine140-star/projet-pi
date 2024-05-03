import {Commentaire} from "./Commentaire";
import {User} from "./User";
export interface Actualites {
  id: number ;
  titre: string;
  contenu: string;
  datePublication: Date | null;
  auteur: string;
  commentaires: Commentaire[];
  user: User | null;
}


