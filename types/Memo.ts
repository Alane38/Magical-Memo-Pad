import { MagicProperty } from './MagicProperty';

export interface Memo {
  id: number; // Assure-toi que l'ID est du bon type
  title: string;
  content: string;
  magicProperty: MagicProperty; // Type correct
}
