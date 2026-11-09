import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Fusionne des classes Tailwind sans doublons contradictoires (même utilitaire que shadcn/ui). */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
