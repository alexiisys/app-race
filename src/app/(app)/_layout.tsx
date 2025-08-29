/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View } from 'react-native';

import { colors } from '@/components/ui';
import { Balance, Settings as SettingsIcon } from '@/components/ui/icons';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: colors.iconInactive,
        tabBarLabelStyle: {
          marginTop: 4,
        },
        tabBarIconStyle: {
          width: 60,
          gap: 6,
        },
        tabBarBackground: () => (
          <View className="flex-1 bg-[#F8F8F9] dark:bg-[#1C1C1E]" />
        ),
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          alignItems: 'center',
          borderTopWidth: 0,
          margin: 24,
          overflow: 'hidden',
          paddingTop: 6,
          borderRadius: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-row flex-nowrap items-center gap-1">
              {focused ? <Balance /> : <Balance color={'white'} />}
            </View>
          ),
          tabBarButtonTestID: 'feed-tab',
        }}
      />
      <Tabs.Screen
        name="garage"
        options={{
          title: 'Garage',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-row flex-nowrap items-center gap-1">
              {focused ? <Balance /> : <Balance color={'white'} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: 'Track',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-row flex-nowrap items-center gap-1">
              {focused ? <Balance /> : <Balance color={'white'} />}
            </View>
          ),
          tabBarButtonTestID: 'feed-tab',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-row flex-nowrap items-center gap-1">
              {focused ? <Balance /> : <Balance color={'white'} />}
            </View>
          ),
          tabBarButtonTestID: 'feed-tab',
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-row flex-nowrap items-center gap-1">
              {focused ? <Balance /> : <Balance color={'white'} />}
            </View>
          ),
          tabBarButtonTestID: 'feed-tab',
        }}
      />
    </Tabs>
  );
}
