import type { ReactNode } from 'react';
import { ActivityIndicator, Pressable, View, type PressableProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../cn';
import { colors } from '../theme';
import { Text } from './Text';

const buttonVariants = cva('flex-row items-center justify-center gap-2 rounded-lg active:opacity-80', {
  variants: {
    variant: {
      primary: 'bg-brand',
      secondary: 'bg-surface-raised border border-border',
      outline: 'border border-brand',
      ghost: 'bg-transparent',
      destructive: 'bg-danger',
    },
    size: {
      sm: 'h-9 px-3',
      md: 'h-12 px-5', // 48 px : au-dessus de la cible tactile minimale de 44 px
      lg: 'h-14 px-6',
    },
    block: { true: 'w-full', false: '' },
  },
  defaultVariants: { variant: 'primary', size: 'md', block: false },
});

const labelTone = {
  primary: 'onBrand', secondary: 'default', outline: 'brand', ghost: 'brand', destructive: 'onBrand',
} as const;

export type ButtonProps = Omit<PressableProps, 'children'> & VariantProps<typeof buttonVariants> & {
  label: string;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
};

export function Button({ label, icon, loading, variant, size, block, disabled, className, ...props }: ButtonProps) {
  const v: keyof typeof labelTone = variant ?? 'primary';
  const isDisabled = disabled || loading;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: !!isDisabled, busy: !!loading }}
      disabled={isDisabled}
      className={cn(buttonVariants({ variant, size, block }), isDisabled && 'opacity-50', className)}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={v === 'primary' || v === 'destructive' ? colors.brand.foreground : colors.brand.DEFAULT} />
      ) : (
        <>
          {icon ? <View>{icon}</View> : null}
          <Text variant={size === 'sm' ? 'label' : 'heading'} tone={labelTone[v]} className="font-semibold">{label}</Text>
        </>
      )}
    </Pressable>
  );
}
