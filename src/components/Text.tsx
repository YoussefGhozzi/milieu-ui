import { Text as RNText, type TextProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../cn';

const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      display: 'text-display font-bold tracking-tight',
      title: 'text-title font-bold tracking-tight',
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

export function Text({ variant, tone, className, ...props }: TextProps & TextVariantProps & { className?: string }) {
  const role = variant === 'display' || variant === 'title' || variant === 'heading' ? 'header' : undefined;
  return <RNText accessibilityRole={role} className={cn(textVariants({ variant, tone }), className)} {...props} />;
}
