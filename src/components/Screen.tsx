import type { ReactNode } from 'react';
import { ScrollView, View, type ScrollViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cn } from '../cn';

/** Conteneur d'écran : fond, marges sûres, défilement et largeur maximale sur tablette et web. */
export function Screen({ children, scroll = true, top = true, className, contentClassName, ...scrollProps }: {
  children: ReactNode; scroll?: boolean; top?: boolean; className?: string; contentClassName?: string;
} & ScrollViewProps) {
  const insets = useSafeAreaInsets();
  const inner = <View className={cn('w-full max-w-xl self-center px-5 pb-10', contentClassName)}>{children}</View>;
  return (
    <View className={cn('flex-1 bg-background', className)} style={{ paddingTop: top ? insets.top : 0 }}>
      {scroll ? <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" {...scrollProps}>{inner}</ScrollView> : inner}
    </View>
  );
}
