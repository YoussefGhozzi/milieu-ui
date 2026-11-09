import type { ReactNode } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from './Text';

/**
 * Feuille du bas : utilisée pour toute confirmation (réserver, annuler, acheter).
 * Plus naturelle qu'une boîte de dialogue sur mobile, et l'action reste dans la zone du pouce.
 */
export function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title?: string; children: ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={onClose} statusBarTranslucent>
      <View className="flex-1 justify-end">
        <Pressable accessibilityLabel="Fermer" onPress={onClose} className="absolute inset-0 bg-black/60" />
        <View accessibilityViewIsModal className="rounded-t-xl border-t border-border bg-surface px-5 pt-3" style={{ paddingBottom: Math.max(insets.bottom, 16) + 8 }}>
          <View className="mb-4 h-1 w-10 self-center rounded-full bg-border-strong" />
          {title ? <Text variant="title" className="mb-4">{title}</Text> : null}
          {children}
        </View>
      </View>
    </Modal>
  );
}
