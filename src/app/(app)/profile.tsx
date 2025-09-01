import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Car,
  Cash,
  Flash,
  FocusAwareStatusBar,
  Settings,
  Star,
  Text,
} from '@/components/ui';
import { useSelectedTheme } from '@/lib';
import { useSetting } from '@/lib/storage';
import { useCar } from '@/lib/storage/modules/cars';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const cars = useCar.use.cars();
  const router = useRouter();
  const { profile } = useSetting.use.settings();

  return (
    <>
      <FocusAwareStatusBar />
      <View
        className="flex-1 gap-4  bg-white dark:bg-black"
        style={{ paddingTop: insets.top + 20 }}
      >
        <View className="mx-6 flex-row items-center justify-between">
          <View className="gap-2">
            <Text className="text-3xl font-bold">Profile</Text>
            <Text className="font-light">Set all your stuff</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.navigate('/settings')}
            className="rounded-full bg-color3  p-4 dark:bg-color1"
          >
            <Settings width={24} height={24} />
          </TouchableOpacity>
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
      </View>
    </>
  );
};

export default Profile;
