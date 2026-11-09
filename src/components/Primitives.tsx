import { useEffect, useRef, type ReactNode } from 'react';
import { Animated, Pressable, View, type PressableProps, type ViewProps } from 'react-native';
import { ChevronRight, Coins } from 'lucide-react-native';
import { cn } from '../cn';
import { colors } from '../theme';
import { Text } from './Text';

/* ---------- Card ---------- */
export function Card({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('rounded-xl border border-border bg-surface p-4', className)} {...props} />;
}

export function PressableCard({ className, children, ...props }: PressableProps & { className?: string; children: ReactNode }) {
  return (
    <Pressable accessibilityRole="button" className={cn('rounded-xl border border-border bg-surface p-4 active:bg-surface-raised', className)} {...props}>
      {children}
    </Pressable>
  );
}

/* ---------- Badge ---------- */
const badgeTones = {
  neutral: 'bg-surface-raised border border-border',
  brand: 'bg-brand-soft',
  success: 'bg-success-soft',
  warning: 'bg-warning-soft',
  danger: 'bg-danger-soft',
} as const;
const badgeText = { neutral: 'muted', brand: 'brand', success: 'success', warning: 'warning', danger: 'danger' } as const;

export function Badge({ label, tone = 'neutral', className }: { label: string; tone?: keyof typeof badgeTones; className?: string }) {
  return (
    <View className={cn('self-start rounded-full px-2.5 py-1', badgeTones[tone], className)}>
      <Text variant="caption" tone={badgeText[tone]} className="font-semibold">{label}</Text>
    </View>
  );
}

/* ---------- Chip (filtre sélectionnable) ---------- */
export function Chip({ label, selected, onPress }: { label: string; selected?: boolean; onPress?: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      onPress={onPress}
      className={cn('h-9 justify-center rounded-full border px-4', selected ? 'border-brand bg-brand' : 'border-border bg-surface active:bg-surface-raised')}
    >
      <Text variant="label" tone={selected ? 'onBrand' : 'default'}>{label}</Text>
    </Pressable>
  );
}

/* ---------- Jetons ---------- */
export function TokenAmount({ value, size = 'md', tone = 'brand', suffix }: { value: number; size?: 'sm' | 'md' | 'lg'; tone?: 'brand' | 'default' | 'muted'; suffix?: string }) {
  const icon = size === 'lg' ? 26 : size === 'md' ? 18 : 14;
  const variant = size === 'lg' ? 'display' : size === 'md' ? 'heading' : 'label';
  const color = tone === 'brand' ? colors.brand.DEFAULT : tone === 'muted' ? colors.foreground.muted : colors.foreground.DEFAULT;
  return (
    <View className="flex-row items-center gap-1.5" accessible accessibilityLabel={`${value} jetons`}>
      <Coins size={icon} color={color} />
      <Text variant={variant} tone={tone === 'brand' ? 'brand' : tone} className="font-bold">{value}</Text>
      {suffix ? <Text variant="label" tone="muted">{suffix}</Text> : null}
    </View>
  );
}

/* ---------- Places restantes ---------- */
export function SeatsBadge({ booked, capacity }: { booked: number; capacity: number }) {
  const left = Math.max(0, capacity - booked);
  if (left === 0) return <Badge label="Complet · liste d’attente" tone="danger" />;
  if (left === 1) return <Badge label="Dernière place" tone="warning" />;
  if (left <= 3) return <Badge label={`${left} places`} tone="warning" />;
  return <Badge label={`${left} places`} tone="success" />;
}

/* ---------- Avatar ---------- */
export function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  return (
    <View style={{ width: size, height: size }} className="items-center justify-center rounded-full bg-brand-soft" accessibilityLabel={name}>
      <Text variant={size >= 56 ? 'heading' : 'label'} tone="brand" className="font-bold">{initials}</Text>
    </View>
  );
}

/* ---------- En-tête de section ---------- */
export function SectionHeader({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <View className="mb-3 mt-6 flex-row items-center justify-between">
      <Text variant="heading">{title}</Text>
      {action ? (
        <Pressable accessibilityRole="link" onPress={onAction} hitSlop={12}>
          <Text variant="label" tone="brand">{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

/* ---------- Ligne de liste ---------- */
export function ListRow({ icon, title, subtitle, right, onPress, chevron = true }: {
  icon?: ReactNode; title: string; subtitle?: string; right?: ReactNode; onPress?: () => void; chevron?: boolean;
}) {
  return (
    <Pressable accessibilityRole={onPress ? 'button' : undefined} onPress={onPress} disabled={!onPress}
      className="min-h-14 flex-row items-center gap-3 py-3 active:opacity-70">
      {icon ? <View className="h-10 w-10 items-center justify-center rounded-lg bg-surface-raised">{icon}</View> : null}
      <View className="flex-1">
        <Text variant="body">{title}</Text>
        {subtitle ? <Text variant="caption" tone="muted">{subtitle}</Text> : null}
      </View>
      {right}
      {onPress && chevron ? <ChevronRight size={18} color={colors.foreground.subtle} /> : null}
    </Pressable>
  );
}

export function Divider() {
  return <View className="h-px bg-border" />;
}

/* ---------- État vide ---------- */
export function EmptyState({ icon, title, body, action }: { icon?: ReactNode; title: string; body?: string; action?: ReactNode }) {
  return (
    <View className="items-center gap-3 px-6 py-12">
      {icon ? <View className="mb-1 h-16 w-16 items-center justify-center rounded-full bg-surface-raised">{icon}</View> : null}
      <Text variant="heading" className="text-center">{title}</Text>
      {body ? <Text tone="muted" className="text-center">{body}</Text> : null}
      {action}
    </View>
  );
}

/* ---------- Squelette de chargement ---------- */
export function Skeleton({ className }: { className?: string }) {
  const opacity = useRef(new Animated.Value(0.4)).current;
  useEffect(() => {
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(opacity, { toValue: 0.9, duration: 700, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 0.4, duration: 700, useNativeDriver: true }),
    ]));
    loop.start();
    return () => loop.stop();
  }, [opacity]);
  return (
    <Animated.View accessibilityElementsHidden style={{ opacity }}>
      <View className={cn('rounded-lg bg-surface-raised', className)} />
    </Animated.View>
  );
}
