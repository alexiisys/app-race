import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Plus, Text, useModal } from '@/components/ui';
import AddTrack from '@/components/ui/modals/add-track';

const Track = () => {
  const insets = useSafeAreaInsets();
  const refModal = useModal();
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 bg-white dark:bg-black"
        style={{ paddingTop: insets.top + 20 }}
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
            data={[1, 2, 3, 4, 5, 6]}
            estimatedItemSize={40}
            numColumns={2}
            keyExtractor={(m) => String(m)}
            renderItem={({ item }) =>
              item !== 1 ? (
                <View className="m-2 flex-1  items-center justify-center gap-3 rounded-xl border border-color4 py-5 ">
                  <View className="size-5 bg-red" />
                  <Text className="font-medium">Sports Car</Text>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={refModal.present}
                  className="m-2 h-24 flex-1 items-center justify-center rounded-xl border-2 border-dashed border-color9"
                >
                  <View className="flex-row items-center justify-center gap-3">
                    <TouchableOpacity className="rounded-full border-2 border-dashed border-color9 p-1">
                      <Plus color={'black'} />
                    </TouchableOpacity>
                    <Text className="font-medium">Add Vehicle</Text>
                  </View>
                </TouchableOpacity>
              )
            }
            scrollEnabled={false}
          />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          className="mx-6 items-center justify-center rounded-lg bg-color5 py-2"
        >
          <Text className="font-medium color-white ">Start Race</Text>
        </TouchableOpacity>
        <View className="mx-6 flex-1">
          <Text className="mb-5 text-2xl font-bold">Recent Races</Text>
          <FlashList
            className="flex-1"
            data={[1, 2, 3, 4, 5, 6]}
            estimatedItemSize={40}
            keyExtractor={(m) => String(m)}
            renderItem={() => (
              <View className="flex-1 flex-row justify-between p-4">
                <View>
                  <Text className="font-bold">Silverstone Circuit</Text>
                  <Text className="font-light">Lightning Bolt</Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold text-color5">112.30</Text>
                  <Text className="text-sm font-light">Best Lap</Text>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>
        <AddTrack ref={refModal.ref} />
      </ScrollView>
    </>
  );
};

export default Track;
