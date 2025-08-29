import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { colors, Input, Modal, Text } from '@/components/ui';
import ItemPicker from '@/components/ui/modals/item-picker';
import { useSelectedTheme } from '@/lib';
import { CATEGORY_CAR } from '@/lib/utils';

const AddTrack = React.forwardRef<BottomSheetModal, {}>(({}, ref) => {
  const { selectedTheme } = useSelectedTheme();
  const isDark = selectedTheme === 'dark';
  return (
    <Modal
      ref={ref}
      index={0}
      snapPoints={['24%']}
      title={'Add Track'}
      backgroundStyle={{
        backgroundColor: colors.white,
      }}
    >
      <View className={'mx-6 flex-1 gap-3'}>
        <Input
          outlined
          placeholderTextColor={'#9a9a9a'}
          placeholder="Track name"
          label={'Track Name'}
        />
        <View className="mb-4 flex-row gap-4">
          <TouchableOpacity className="flex-1 items-center justify-center rounded-lg bg-color8 py-1">
            <Text className="font-medium text-white">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 items-center justify-center rounded-lg bg-color5 py-1">
            <Text className="font-medium text-white">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export default AddTrack;
