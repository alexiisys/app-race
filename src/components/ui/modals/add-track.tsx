import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { colors, Input, Modal, Text } from '@/components/ui';
import { useSelectedTheme } from '@/lib';
import { setTrackId } from '@/lib/storage';
import { addTrack } from '@/lib/storage/modules/tracks';

type Props = {
  onClose?: () => void;
};

const AddTrack = React.forwardRef<BottomSheetModal, Props>(
  ({ onClose }, ref) => {
    const { selectedTheme } = useSelectedTheme();
    const isDark = selectedTheme === 'dark';
    const [name, setName] = React.useState<string>('');

    const onAdd = () => {
      const track = {
        id: `id_track_${Date.now()}`,
        name,
      };
      addTrack(track);
      setTrackId(track.id);
      onClose?.();
    };
    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={['24%']}
        title={'Add Track'}
        backgroundStyle={{
          backgroundColor: isDark ? colors.black : colors.white,
        }}
      >
        <View className={'mx-6 flex-1 gap-3'}>
          <Input
            onChangeText={setName}
            outlined
            placeholderTextColor={'#9a9a9a'}
            placeholder="Track name"
            label={'Track Name'}
          />
          <View className="mb-4 flex-row gap-4">
            <TouchableOpacity
              onPress={onClose}
              className="flex-1 items-center justify-center rounded-lg bg-color8 py-1"
            >
              <Text className="font-medium text-white">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onAdd}
              className="flex-1 items-center justify-center rounded-lg bg-color5 py-1"
            >
              <Text className="font-medium text-white">Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
);

export default AddTrack;
