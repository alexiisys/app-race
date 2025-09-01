import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Car,
  Cash,
  colors,
  Flash,
  FocusAwareStatusBar,
  Leaderboard,
  Map,
  Profile,
  Star,
  Text,
} from '@/components/ui';
import { useSetting } from '@/lib/storage';
import { useCar } from '@/lib/storage/modules/cars';
import { useRace } from '@/lib/storage/modules/races';
import { useTrack } from '@/lib/storage/modules/tracks';

const leaderBoard = [
  {
    track: 'Nurburgring',
    username: 'Silverstone',
    time: 0,
  },
];

export default function Contacts() {
  const insets = useSafeAreaInsets();
  const tracks = useTrack.use.tracks();
  const cars = useCar.use.cars();
  const { profile } = useSetting.use.settings();
  const races = useRace.use.races();
  const router = useRouter();
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 bg-white dark:bg-black"
        style={{ paddingTop: insets.top + 20, marginBottom: insets.bottom }}
      >
        <View className="mx-6 flex-row items-center justify-between">
          <View className="gap-2">
            <Text className="text-3xl font-bold">My Garage</Text>
            <Text className="font-light">Welcome back, {profile.name}!</Text>
          </View>
        </View>
        <View className={'mt-10 items-center gap-10'}>
          <View className="flex-row gap-10">
            <View className="w-28 items-center gap-2 rounded-2xl border border-color4 bg-white py-3 dark:border-0 dark:bg-color2">
              <Star />
              <Text className="font-bold">{profile.level}</Text>
              <Text className="font-light">Level</Text>
            </View>
            <View className="w-28 items-center gap-2 rounded-2xl border border-color4 bg-white py-3 dark:border-0 dark:bg-color2">
              <Flash />
              <Text className="font-bold">{profile.xp}</Text>
              <Text className="font-light">XP</Text>
            </View>
          </View>
          <View className="flex-row gap-10">
            <View className="w-28 items-center gap-2 rounded-2xl border border-color4 bg-white py-3 dark:border-0 dark:bg-color2">
              <Cash width={28} height={28} />
              <Text className="font-bold">{profile.money}</Text>
              <Text className="font-light">Money</Text>
            </View>
            <View className="w-28 items-center gap-2 rounded-2xl border border-color4 bg-white py-3 dark:border-0 dark:bg-color2">
              <Car width={28} height={28} />
              <Text className="font-bold">{cars.length}</Text>
              <Text className="font-light">Vehicles</Text>
            </View>
          </View>
        </View>
        <View className="mx-6">
          <Text className="mb-5 text-2xl font-bold">Quick Actions</Text>
          <View className="gap-5">
            <View className="flex-row gap-5">
              <TouchableOpacity
                onPress={() => router.navigate('/(app)/track')}
                className="flex-1 items-center gap-2 rounded-2xl border border-color4 bg-white py-4 dark:border-0 dark:bg-color2"
              >
                <Map />
                <Text className="font-light">Start Race</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.navigate('/(app)/garage')}
                className="flex-1 items-center gap-2 rounded-2xl border border-color4 bg-white py-4 dark:border-0 dark:bg-color2"
              >
                <Car />
                <Text className="font-light">View Garage</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-5">
              <TouchableOpacity
                onPress={() => router.navigate('/(app)/leaderboard')}
                className="flex-1 items-center gap-2 rounded-2xl border border-color4 bg-white py-4 dark:border-0 dark:bg-color2"
              >
                <Leaderboard />
                <Text className="font-light">Leaderboards</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.navigate('/(app)/profile')}
                className="flex-1 items-center gap-2 rounded-2xl border border-color4 bg-white py-4 dark:border-0 dark:bg-color2"
              >
                <Profile color={colors.color5} />
                <Text className="font-light">Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="mx-6 flex-1">
          <Text className="mb-5 text-2xl font-bold">Recent Races</Text>
          <FlashList
            className="mb-40 flex-1"
            data={races}
            nestedScrollEnabled
            estimatedItemSize={40}
            keyExtractor={(m) => m.id}
            renderItem={({ item: race }) => (
              <View className="mb-2 flex-1 flex-row justify-between rounded-xl p-4 dark:bg-dark">
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
      </ScrollView>
    </>
  );
}
