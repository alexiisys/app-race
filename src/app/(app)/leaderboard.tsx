import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Text } from '@/components/ui';

const Leaderboard = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <FocusAwareStatusBar />
      <View
        className="flex-1 gap-4 bg-white dark:bg-black"
        style={{ paddingTop: insets.top + 20 }}
      >
        <View className="mx-6 flex-row items-center justify-between">
          <View className="gap-2">
            <Text className="text-3xl font-bold">Leaderboards</Text>
            <Text className="font-light">Complete with racers worldwide</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            contentContainerClassName="flex-row self-start mx-6 gap-4 items-start"
          >
            <View className="rounded-full bg-color6 px-4 py-1">
              <Text className="font-bold">Overall</Text>
            </View>
            <View className="rounded-full bg-color7 px-4 py-1">
              <Text className="">Track Records</Text>
            </View>
            <View className="rounded-full bg-color7 px-4 py-1">
              <Text className="">Weekly</Text>
            </View>
            <View className="rounded-full bg-color7 px-4 py-1">
              <Text className="">Friends</Text>
            </View>
          </ScrollView>
        </View>
        <View className="mx-6 flex-1">
          <Text className="mb-3 text-2xl font-bold">Your Rank</Text>
          <View className="mb-8 flex-row justify-between rounded-3xl border border-color5 p-4">
            <View className="flex-row items-center justify-center gap-4">
              <Text className="text-3xl font-bold text-color5">#12</Text>
              <View>
                <Text className="font-bold">Silverstone Circuit</Text>
                <Text className="font-light">Lightning Bolt</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-lg font-bold text-color5">112.30</Text>
              <Text className="text-sm font-light">Best Lap</Text>
            </View>
          </View>
          <FlashList
            className="flex-1"
            data={[1, 2, 3, 4, 5, 6]}
            estimatedItemSize={40}
            keyExtractor={(m) => String(m)}
            renderItem={({ item }) => (
              <View className="mb-3 flex-1 flex-row justify-between rounded-3xl border border-color4 p-4">
                <View className="flex-row items-center justify-center gap-4">
                  <Text className="text-3xl font-bold text-color5">#{item}</Text>
                  <View>
                    <Text className="font-bold">Silverstone Circuit</Text>
                    <Text className="font-light">Lightning Bolt</Text>
                  </View>
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
      </View>
    </>
  );
};

export default Leaderboard;
