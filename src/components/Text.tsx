import { Children } from 'react';
import { Text as RNText, type TextProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../cn';
import { translate } from '../i18n';

const textVariants = cva('font-sans text-foreground', {
  variants: {
    variant: {
      display: 'font-display text-display font-normal tracking-tight',
      title: 'font-display text-title font-normal tracking-tight',
      heading: 'text-heading font-semibold',
      body: 'text-body',
      label: 'text-label font-medium',
      caption: 'text-caption',
      overline: 'text-caption font-semibold uppercase tracking-widest',
    },
    tone: {
      default: 'text-foreground',
      muted: 'text-foreground-muted',
      subtle: 'text-foreground-subtle',
      brand: 'text-brand',
      onBrand: 'text-brand-foreground',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    },
  },
  defaultVariants: { variant: 'body', tone: 'default' },
});

export type TextVariantProps = VariantProps<typeof textVariants>;

export function Text({ variant, tone, className, children, ...props }: TextProps & TextVariantProps & { className?: string }) {
  const role = variant === 'display' || variant === 'title' || variant === 'heading' ? 'header' : undefined;
  // Chaque morceau de texte est traduit dans la langue courante (les nombres et éléments restent tels quels).
  const content = Children.toArray(children).map((c) => (typeof c === 'string' ? translate(c) : c));
  return <RNText accessibilityRole={role} className={cn(textVariants({ variant, tone }), className)} {...props}>{content}</RNText>;
}
