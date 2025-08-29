/* eslint-disable react/react-in-jsx-scope */
import { Env } from '@env';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Switch, Text } from '@/components/ui';
import { useSelectedTheme } from '@/lib';
import { openLinkInBrowser } from '@/lib/utils';

export default function Settings() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const isDark = selectedTheme === 'dark';
  const switchTheme = () => setSelectedTheme(isDark ? 'light' : 'dark');
  const router = useRouter();
  const openPrivacyPolicy = () => openLinkInBrowser(Env.PRIVACY_POLICY);

  const openContactUs = () => openLinkInBrowser(Env.FEEDBACK_FORM);
  return (
    <>
      <FocusAwareStatusBar />

      <SafeAreaView className=" mt-4 flex-1 px-6">
        <View className="relative flex-1 gap-10">
          <View className="flex-row gap-2 items-center">
            <TouchableOpacity
              className="size-5 bg-red"
              onPress={() => router.back()}
            />
            <Text className="font-exo2Bold text-2xl">Settings</Text>
          </View>
          <Switch
            checked={isDark}
            onChange={switchTheme}
            label={isDark ? 'Dark theme' : 'Light theme'}
            accessibilityLabel={'theme_switch'}
          />
          {/*<TouchableOpacity onPress={openPrivacyPolicy}>*/}
          {/*  <Text className="text-app-shadowBorder underline">*/}
          {/*    Privacy Policy*/}
          {/*  </Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<View*/}
          {/*  className="absolute right-0 w-full gap-4"*/}
          {/*  style={{ bottom: 12 }}*/}
          {/*>*/}
          {/*  <Text className="text-center ">Have a problem?</Text>*/}
          {/*  <Button label={'Contact us'} onPress={openContactUs} />*/}
          {/*</View>*/}
        </View>
      </SafeAreaView>
    </>
  );
}
