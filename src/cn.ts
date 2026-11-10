import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Nos tailles de texte personnalisées (tokens.js) doivent être déclarées à tailwind-merge :
 * sinon `text-title` et `text-foreground` sont pris pour deux couleurs et la taille est supprimée.
 */
const twMerge = extendTailwindMerge({
  extend: { classGroups: { 'font-size': [{ text: ['caption', 'label', 'body', 'heading', 'title', 'display'] }] } },
});

/** Fusionne des classes Tailwind sans doublons contradictoires (même utilitaire que shadcn/ui). */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
