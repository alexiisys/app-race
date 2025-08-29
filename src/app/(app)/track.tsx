import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Plus, Text } from '@/components/ui';
import { FlashList } from '@shopify/flash-list';

const Track = () => {
  const insets = useSafeAreaInsets();
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
                <View className="m-2 flex-1  py-5 justify-center items-center gap-3 rounded-xl border border-color4 ">
                    <View className='size-5 bg-red' />
                    <Text className="font-medium">Sports Car</Text>
                </View>
              ) : (
                <View className="m-2 h-24 flex-1 items-center justify-center rounded-xl border-2 border-dashed border-color5">
                  <View className="flex-row items-center justify-center gap-3">
                    <TouchableOpacity className="rounded-full border-2 border-dashed border-color5 p-1">
                      <Plus color={'black'} />
                    </TouchableOpacity>
                    <Text className="font-medium">Add Vehicle</Text>
                  </View>
                </View>
              )
            }
            scrollEnabled={false}
          />
        </View>
        <TouchableOpacity onPress={() => {}} className='mx-6 items-center justify-center rounded-lg py-2 bg-color5'>
          <Text className='color-white font-medium '>Start Race</Text>
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
                  <Text className="text-color5 text-lg font-bold">112.30</Text>
                  <Text className="text-sm font-light">Best Lap</Text>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>

      </ScrollView>
    </>
  );
};

export default Track;
