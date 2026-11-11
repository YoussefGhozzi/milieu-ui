/** Traduction des textes affichés : l'app enregistre sa fonction, le composant Text l'applique. */
let translator: (text: string) => string = (text) => text;
export const setTranslator = (fn: (text: string) => string) => { translator = fn; };
export const translate = (text: string) => translator(text);
