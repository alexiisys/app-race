import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Circle,
  FocusAwareStatusBar,
  Plus,
  Speed,
  Text,
  useModal,
} from '@/components/ui';
import AddVehicleModal from '@/components/ui/modals/add-vehicle-modal';
import { useSelectedTheme } from '@/lib';
import { setCarId, useSetting } from '@/lib/storage';
import { useCar } from '@/lib/storage/modules/cars';
import { CATEGORY_CAR } from '@/lib/utils';

const Garage = () => {
  const insets = useSafeAreaInsets();
  const refModal = useModal();
  const cars = useCar.use.cars();
  const { selectedCar, selectedTrack } = useSetting.use.settings();

  const { selectedTheme } = useSelectedTheme();
  const isDark = selectedTheme === 'dark';

  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const onPressCar = (id: string) => {
    setCarId(id);
  };

  return (
    <>
      <FocusAwareStatusBar />
      <View
        className="flex-1 gap-4 bg-white dark:bg-black"
        style={{ paddingTop: insets.top + 20 }}
      >
        <View className="mx-6 flex-row items-center justify-between">
          <View className="gap-2">
            <Text className="text-3xl font-bold">My Garage</Text>
            <Text className="font-light">{cars.length} vehicles</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="flex-row self-start mx-6 gap-4 items-start"
          >
            <TouchableOpacity
              onPress={() => setSelectedCategory('all')}
              className={`rounded-full ${selectedCategory !== 'all' ? 'bg-color7 dark:bg-dark' : 'bg-color6 dark:bg-color10'} px-4 py-1`}
            >
              <Text className={selectedCategory !== 'all' ? '' : 'font-bold'}>
                All
              </Text>
            </TouchableOpacity>
            {CATEGORY_CAR.map((car) => (
              <TouchableOpacity
                onPress={() => setSelectedCategory(car.value)}
                className={`rounded-full ${selectedCategory !== car.value ? 'bg-color7 dark:bg-dark' : 'bg-color6 dark:bg-color10'} px-4 py-1`}
                key={car.value}
              >
                <Text
                  className={selectedCategory !== car.value ? '' : 'font-bold'}
                >
                  {car.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="mx-4 flex-1">
          <Text className="mx-2 mb-5 text-2xl font-bold">Cars</Text>
          <FlashList
            className="flex-1"
            data={[
              ...cars.filter(
                (item) =>
                  selectedCategory === 'all' ||
                  item.category === selectedCategory
              ),
              -1,
            ]}
            estimatedItemSize={40}
            numColumns={2}
            keyExtractor={(m) => (typeof m === 'number' ? String(m) : m.id)}
            renderItem={({ item }) => {
              if (typeof item === 'number') {
                return (
                  <TouchableOpacity
                    onPress={() => refModal.present()}
                    className="m-2 h-28 flex-1 items-center justify-center rounded-xl border-2 border-dashed border-color5 dark:bg-color2"
                  >
                    <View className="flex-row items-center justify-center gap-3">
                      <View className="rounded-full border-2 border-dashed border-color5 p-1">
                        <Plus color={isDark ? 'white' : 'black'} />
                      </View>
                      <Text className="font-medium">Add Vehicle</Text>
                    </View>
                  </TouchableOpacity>
                );
              }
              return (
                <TouchableOpacity
                  onPress={() => onPressCar(item.id)}
                  className={`m-2 flex-1 flex-row justify-between rounded-xl dark:bg-color2 ${selectedCar !== item.id ? 'border border-color4' : 'border border-color5'}`}
                >
                  <View className="w-[65%] py-6 pl-3">
                    <Text className="font-bold">{item.name}</Text>
                    <Text className="font-light">
                      {
                        CATEGORY_CAR.find((i) => i.value === item.category)
                          ?.label
                      }
                    </Text>
                  </View>
                  <View className="w-[25%] flex-row items-center gap-2 py-2 pr-1">
                    <View className="items-center gap-2">
                      <Speed width={10} height={10} />
                      <View
                        style={{ height: 50, width: 10 }}
                        className="justify-end rounded-sm border border-color5"
                      >
                        <View
                          className="w-full bg-[#FC6A34]"
                          style={{ height: `${item.param1}%` }}
                        />
                      </View>
                    </View>
                    <View className="items-center gap-2">
                      <Circle width={10} height={10} />
                      <View
                        style={{ height: 50, width: 10 }}
                        className="justify-end rounded-sm border border-color5"
                      >
                        <View
                          className="w-full bg-[#FCD03E]"
                          style={{ height: `${item.param2}%` }}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            scrollEnabled={false}
          />
        </View>
        <AddVehicleModal ref={refModal.ref} onClose={refModal.dismiss} />
      </View>
    </>
  );
};

export default Garage;
