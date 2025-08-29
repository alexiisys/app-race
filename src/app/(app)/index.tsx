import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Settings, Text } from '@/components/ui';

export default function Contacts() {
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
            <Text className="text-3xl font-bold">My Garage</Text>
            <Text className="font-light">Welcome back, Rider!</Text>
          </View>
        </View>
        <View className={'mt-10 items-center gap-10'}>
          <View className="flex-row gap-10">
            <View className="dark:bg-color2 border-color4 w-28 items-center gap-2 rounded-2xl border bg-white py-3 dark:border-0">
              <View className="mb-2 size-4 bg-red" />
              <Text className="font-bold">28</Text>
              <Text className="font-light">Level</Text>
            </View>
            <View className="dark:bg-color2 border-color4 w-28 items-center gap-2 rounded-2xl border bg-white py-3 dark:border-0">
              <View className="mb-2 size-4 bg-red" />
              <Text className="font-bold">28</Text>
              <Text className="font-light">Level</Text>
            </View>
          </View>
          <View className="flex-row gap-10">
            <View className="dark:bg-color2 border-color4 w-28 items-center gap-2 rounded-2xl border bg-white py-3 dark:border-0">
              <View className="mb-2 size-4 bg-red" />
              <Text className="font-bold">28</Text>
              <Text className="font-light">Level</Text>
            </View>
            <View className="dark:bg-color2 border-color4 w-28 items-center gap-2 rounded-2xl border bg-white py-3 dark:border-0">
              <View className="mb-2 size-4 bg-red" />
              <Text className="font-bold">28</Text>
              <Text className="font-light">Level</Text>
            </View>
          </View>
        </View>
        <View className="mx-6">
          <Text className="mb-5 text-2xl font-bold">Quick Actions</Text>
          <View className="gap-5">
            <View className="flex-row gap-5">
              <View className="dark:bg-color2 border-color4 flex-1 items-center gap-2 rounded-2xl border bg-white py-4 dark:border-0">
                <View className="size-4 bg-red" />
                <Text className="font-light">Level</Text>
              </View>
              <View className="dark:bg-color2 border-color4 flex-1 items-center gap-2 rounded-2xl border bg-white py-4 dark:border-0">
                <View className="size-4 bg-red" />
                <Text className="font-light">Level</Text>
              </View>
            </View>
            <View className="flex-row gap-5">
              <View className="dark:bg-color2 border-color4 flex-1 items-center gap-2 rounded-2xl border bg-white py-4 dark:border-0">
                <View className="size-4 bg-red" />
                <Text className="font-light">Level</Text>
              </View>
              <View className="dark:bg-color2 border-color4 flex-1 items-center gap-2 rounded-2xl border bg-white py-4 dark:border-0">
                <View className="size-4 bg-red" />
                <Text className="font-light">Level</Text>
              </View>
            </View>
          </View>
        </View>
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
}
