import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Flag,
  FocusAwareStatusBar,
  Plus,
  Text,
  useModal,
} from '@/components/ui';
import AddTrack from '@/components/ui/modals/add-track';
import { useSelectedTheme } from '@/lib';
import { setTrackId, useSetting } from '@/lib/storage';
import { useCar } from '@/lib/storage/modules/cars';
import { addRace, useRace } from '@/lib/storage/modules/races';
import { useTrack } from '@/lib/storage/modules/tracks';

const Track = () => {
  const insets = useSafeAreaInsets();
  const refModal = useModal();
  const tracks = useTrack.use.tracks();
  const cars = useCar.use.cars();
  const races = useRace.use.races();

  const { selectedTrack, selectedCar } = useSetting.use.settings();
  const onSelectTrack = (id: string) => {
    setTrackId(id);
  };
  const onAddRace = () => {
    addRace({
      id: `id_race_${Date.now()}`,
      id_car: selectedCar,
      id_track: selectedTrack,
      time: Number(
        `${Math.floor(Math.random() * (120 - 80 + 1)) + 80}.${Math.floor(Math.random() * (100 - 10 + 1)) + 10}`
      ),
    });
  };

  const { selectedTheme } = useSelectedTheme();
  const isDark = selectedTheme === 'dark';
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 bg-white dark:bg-black"
        style={{ paddingTop: insets.top + 20, marginBottom: 60 }}
      >
        <View className="mx-6 flex-row items-center justify-between">
          <View className="gap-2">
            <Text className="text-3xl font-bold">Track Sessions</Text>
            <Text className="font-light">
              Choose your track and start racing
            </Text>
          </View>
        </View>
        <View className="mx-4 flex-1">
          <Text className="mx-2 mb-5 text-2xl font-bold">Select Track</Text>
          <FlashList
            className="flex-1"
            data={[...tracks, -1]}
            estimatedItemSize={40}
            numColumns={2}
            keyExtractor={(m) => (typeof m === 'number' ? String(m) : m.id)}
            renderItem={({ item }) => {
              if (typeof item === 'number') {
                return (
                  <TouchableOpacity
                    onPress={refModal.present}
                    key={'new'}
                    className="m-2 h-24 flex-1 items-center justify-center rounded-xl border-2 border-dashed border-color8 dark:bg-dark"
                  >
                    <View className="flex-row items-center justify-center gap-3">
                      <TouchableOpacity className="rounded-full border-2 border-dashed border-color8 p-1">
                        <Plus color={isDark ? 'white' : 'black'} />
                      </TouchableOpacity>
                      <Text className="font-medium">Add Vehicle</Text>
                    </View>
                  </TouchableOpacity>
                );
              }
              return (
                <TouchableOpacity
                  onPress={() => onSelectTrack(item.id)}
                  key={item.id}
                  className={`m-2 flex-1  items-center justify-center gap-1 rounded-xl dark:bg-dark ${selectedTrack === item.id ? 'border border-color5' : 'border border-color4'} py-5`}
                >
                  <Flag
                    width={24}
                    height={24}
                    color={isDark ? 'white' : 'black'}
                  />
                  <Text className="font-medium">{item.name}</Text>
                </TouchableOpacity>
              );
            }}
            scrollEnabled={false}
          />
        </View>
        <TouchableOpacity
          onPress={onAddRace}
          className="mx-6 items-center justify-center rounded-lg bg-color5 py-2"
        >
          <Text className="font-medium color-white ">Start Race</Text>
        </TouchableOpacity>
        <View className="mx-6 flex-1 ">
          <Text className="mb-5 text-2xl font-bold">Recent Races</Text>
          <FlashList
            className="flex-1"
            data={races}
            estimatedItemSize={40}
            keyExtractor={(m) => m.id}
            renderItem={({ item: race }) => (
              <View className="m-2 flex-1 flex-row justify-between rounded-xl p-4 dark:bg-dark">
                <View>
                  <Text className="font-bold">
                    {tracks?.find((item) => item.id === race.id_track)?.name}{' '}
                    Circuit
                  </Text>
                  <Text className="font-light">
                    {cars?.find((item) => item.id === race.id_car)?.name}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold text-color5">
                    {race.time}
                  </Text>
                  <Text className="text-sm font-light">Best Lap</Text>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>
        <AddTrack ref={refModal.ref} onClose={refModal.dismiss} />
      </ScrollView>
    </>
  );
};

export default Track;
