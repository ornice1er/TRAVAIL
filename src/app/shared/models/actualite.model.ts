export interface Actualite {
  id: number;
  titre: string;
  resume: string;
  contenu: string;
  imageUrl: string;
  datePublication: Date;
  auteur: string;
  categorie: string;
  slug: string;
  tags: string[];
}

export interface Service {
  id: string;
  nom: string;
  description: string;
  url: string;
  icone: string;
  disponible: boolean;
}

export interface Document {
  id: string;
  titre: string;
  description: string;
  url: string;
  type: 'loi' | 'decret' | 'arrete' | 'circulaire';
  datePublication: Date;
}