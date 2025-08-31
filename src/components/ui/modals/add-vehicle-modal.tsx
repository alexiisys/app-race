import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { colors, Input, Text } from '@/components/ui';
import ItemPicker from '@/components/ui/modals/item-picker';
import { useSelectedTheme } from '@/lib';
import { addCar } from '@/lib/storage/modules/cars';
import { CATEGORY_CAR } from '@/lib/utils';

import { Modal } from '../modal';

type Props = {
  onClose?: () => void;
};
const AddVehicleModal = React.forwardRef<BottomSheetModal, Props>(
  ({ onClose }, ref) => {
    const { selectedTheme } = useSelectedTheme();
    const isDark = selectedTheme === 'dark';
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState(CATEGORY_CAR[0].value);

    const onAddCar = () => {
      addCar({
        id: `id_car_${Date.now()}`,
        name,
        category,
        param1: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
        param2: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
      });
    };

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
            onChangeText={setName}
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
          <View className="mb-6 flex-row gap-4">
            <TouchableOpacity
              onPress={onClose}
              className="flex-1 items-center justify-center rounded-lg bg-color8 py-1"
            >
              <Text className="font-medium text-white">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onAddCar}
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

export default AddVehicleModal;
