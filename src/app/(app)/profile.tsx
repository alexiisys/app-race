import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Settings, Text } from '@/components/ui';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
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
            className="bg-color3 dark:bg-color1  rounded-full p-4"
          >
            <Settings width={24} height={24} />
          </TouchableOpacity>
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
      </View>
    </>
  );
};

export default Profile;
