/* eslint-disable react/react-in-jsx-scope */
import { Env } from '@env';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Button,
  FocusAwareStatusBar,
  Input,
  Switch,
  Text,
} from '@/components/ui';
import { ArrowLeft } from '@/components/ui/icons/app/arrow-left';
import { useSelectedTheme } from '@/lib';
import { setProfile, useSetting } from '@/lib/storage';
import { openLinkInBrowser } from '@/lib/utils';

export default function Settings() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const isDark = selectedTheme === 'dark';
  const switchTheme = () => setSelectedTheme(isDark ? 'light' : 'dark');
  const router = useRouter();
  const openPrivacyPolicy = () => openLinkInBrowser(Env.PRIVACY_POLICY);

  const openContactUs = () => openLinkInBrowser(Env.FEEDBACK_FORM);

  const { profile } = useSetting.use.settings();
  console.log(profile);
  const [name, setName] = React.useState<string>(profile.name);
  const [money, setMoney] = React.useState<string>(profile.money);
  const [level, setLevel] = React.useState<string>(profile.level);
  const [xp, setXP] = React.useState<string>(profile.xp);

  const onSave = () => {
    setProfile({
      name,
      xp,
      money,
      level,
    });
    router.back();
  };
  return (
    <>
      <FocusAwareStatusBar />

      <SafeAreaView className=" mt-4 flex-1 px-6">
        <View className="relative flex-1 gap-10">
          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="" onPress={() => router.back()}>
              <ArrowLeft color={isDark ? 'white' : 'black'} />
            </TouchableOpacity>
            <Text className="font-exo2Bold text-2xl">Settings</Text>
          </View>
          <Switch
            checked={isDark}
            onChange={switchTheme}
            label={isDark ? 'Dark theme' : 'Light theme'}
            accessibilityLabel={'theme_switch'}
          />
          <View className="h-px w-full bg-dark" />
          <Input
            outlined
            value={name}
            onChangeText={setName}
            placeholderTextColor={'#9a9a9a'}
            placeholder="Rick Sanchez"
            label={'Player Name'}
          />
          <Input
            outlined
            value={level}
            onChangeText={setLevel}
            placeholderTextColor={'#9a9a9a'}
            placeholder="28"
            label={'Level'}
          />
          <Input
            outlined
            value={xp}
            onChangeText={setXP}
            placeholderTextColor={'#9a9a9a'}
            placeholder="750"
            label={'XP'}
          />
          <Input
            outlined
            value={money}
            onChangeText={setMoney}
            placeholderTextColor={'#9a9a9a'}
            placeholder="53680"
            label={'Money'}
          />
          <View className="mb-4 flex-row gap-4">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex-1 items-center justify-center rounded-lg bg-color8 py-1"
            >
              <Text className="font-medium text-white">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSave}
              className="flex-1 items-center justify-center rounded-lg bg-color5 py-1"
            >
              <Text className="font-medium text-white">Save</Text>
            </TouchableOpacity>
          </View>
          <View
            className="absolute right-0 w-full gap-4"
            style={{ bottom: 12 }}
          >
            <View className="gap-4">
              <Button
                size={'sm'}
                label={'Contact us'}
                onPress={openContactUs}
              />
              <Button
                size={'sm'}
                label={'Privacy Policy'}
                onPress={openPrivacyPolicy}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
