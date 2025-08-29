import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { colors, Input, Text } from '@/components/ui';
import ItemPicker from '@/components/ui/modals/item-picker';
import { useSelectedTheme } from '@/lib';
import { CATEGORY_CAR } from '@/lib/utils';

import { Modal } from '../modal';

const AddVehicleModal = React.forwardRef<BottomSheetModal, {}>(({}, ref) => {
  const { selectedTheme } = useSelectedTheme();
  const isDark = selectedTheme === 'dark';
  const [category, setCategory] = useState(CATEGORY_CAR[0].value);
  return (
    <Modal
      ref={ref}
      index={0}
      snapPoints={['33%']}
      title={'Add Vehicle'}
      backgroundStyle={{
        backgroundColor: colors.white,
      }}
    >
      <View className={'mx-6 flex-1'}>
        <Input
          outlined
          placeholderTextColor={'#9a9a9a'}
          placeholder="Vehicle name"
          label={'Vahicle Name'}
        />
        <ItemPicker
          label={'Category'}
          onChange={setCategory}
          value={category}
          values={CATEGORY_CAR}
        />
        <View className='flex-row gap-4 mb-6'>
          <TouchableOpacity className='flex-1 py-1 rounded-lg items-center justify-center bg-color8'><Text className='text-white font-medium'>Cancel</Text></TouchableOpacity>
          <TouchableOpacity className='flex-1 py-1 rounded-lg items-center justify-center bg-color5'><Text className='text-white font-medium'>Add</Text></TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export default AddVehicleModal;
