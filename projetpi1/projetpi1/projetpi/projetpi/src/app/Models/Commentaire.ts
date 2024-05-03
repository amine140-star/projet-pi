import {User} from "./User";

export interface Commentaire {
  
  id: number;
  contenu: string;
  dateCreation: Date  | null ;

  utilisateur: User  | null;
  nombreLikes: number; // Définir la propriété pour le nombre de likes
  nombreDislikes: number;
}
