import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useMemo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Text } from '@/components/ui';
import { useSetting } from '@/lib/storage';
import { useRace } from '@/lib/storage/modules/races';
import { useTrack } from '@/lib/storage/modules/tracks';
import { type Race } from '@/types/race';

const raceResults = [
  {
    track: 'Nürburgring',
    name: 'TurboMax',
    time: '2:41.73',
    type: ['friend'],
  },
  {
    track: 'Circuit',
    name: 'RaceTrackRider',
    time: '2:12.38',
    type: ['friend'],
  },
  {
    track: 'Monza',
    name: 'CarGarageX',
    time: '2:26.95',
    type: ['track'],
  },
  {
    track: 'Suzuka',
    name: 'MaxTorque',
    time: '2:33.21',
    type: ['friend', 'weekly'],
  },
  {
    track: 'Silverstone',
    name: 'TurboTrack',
    time: '2:19.87',
    type: ['weekly', 'track'],
  },
  {
    track: 'Nürburgring',
    name: 'GarageRunner',
    time: '2:47.66',
    type: ['friend', 'track'],
  },
  {
    track: 'Circuit',
    name: 'MaxCarZone',
    time: '2:36.59',
    type: ['friend'],
  },
  {
    track: 'Monza',
    name: 'RaceMaxx',
    time: '2:22.13',
    type: ['friend', 'track'],
  },
  {
    track: 'Suzuka',
    name: 'TrackTurbo',
    time: '2:09.45',
    type: ['weekly', 'track'],
  },
  {
    track: 'Silverstone',
    name: 'TurboGarage',
    time: '2:51.78',
    type: ['friend'],
  },
  {
    track: 'Nürburgring',
    name: 'CarVibeMax',
    time: '2:59.05',
    type: ['friend'],
  },
  {
    track: 'Circuit',
    name: 'MaxOnTrack',
    time: '2:15.62',
    type: ['weekly'],
  },
  {
    track: 'Monza',
    name: 'RaceGarageRex',
    time: '2:44.33',
    type: ['track'],
  },
  {
    track: 'Suzuka',
    name: 'TurbochargedX',
    time: '2:18.94',
    type: ['track'],
  },
  {
    track: 'Silverstone',
    name: 'TrackBeastMax',
    time: '2:30.11',
    type: ['friend', 'weekly'],
  },
];

function getMaxEntry(obj: { [key: string]: Race }): Race {
  let maxValue = (Object.values(obj)[0] as Race) ?? {};
  for (const key in obj) {
    if (obj[key].time < maxValue.time) {
      maxValue = obj[key];
    }
  }

  return maxValue;
}

const typeLeaderboard = [
  {
    value: 'overall',
    label: 'Overall',
  },
  {
    value: 'track',
    label: 'Track Records',
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'friend',
    label: 'Friends',
  },
];

const Leaderboard = () => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = React.useState<string>('overall');
  const tracks = useTrack.use.tracks();
  const { profile } = useSetting.use.settings();
  const races = useRace.use.races();

  const bestRace = useCallback(() => {
    return getMaxEntry(
      [...races].reduce(
        (acc, cur) => {
          if (acc[cur.id_track]) {
            acc[cur.id_track].time += cur.time;
          } else {
            acc[cur.id_track] = cur;
          }
          return acc;
        },
        {} as Record<string, Race>
      )
    );
  }, [races]);

  const foundBestRace = useMemo(() => {
    const best = bestRace();
    const track = tracks.find((item) => item.id === best.id_track);
    return {
      track: track?.name,
      time: `${Math.floor(best.time / 60)}:${Math.floor(best.time % 60)
        .toString()
        .padStart(2, '0')}.${best?.time?.toFixed(2)?.split('.')[1]}`,
      name: profile.name,
      isMe: true,
    };
  }, [bestRace, races, tracks, profile.name]);
  const sortedList = useMemo(() => {
    return [
      ...raceResults.filter((item) =>
        item.type.some((item2) =>
          selected !== 'overall' ? item2 === selected : true
        )
      ),
      foundBestRace.track ? foundBestRace : null,
    ]
      .filter((item) => !!item)
      .sort((a, b) => {
        const timeToSeconds = (timeStr: string) => {
          const [min, sec] = timeStr.split(':');
          return parseInt(min) * 60 + parseFloat(sec);
        };

        return timeToSeconds(a.time) - timeToSeconds(b.time);
      })
      .map((item, index) => ({ ...item, id: index + 1 }));
  }, [foundBestRace, selected]);

  const founded = useMemo(
    // @ts-ignore
    () => sortedList.find((item) => item?.isMe),
    [sortedList]
  );
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
            {typeLeaderboard.map((item) => (
              <TouchableOpacity
                key={item.value}
                onPress={() => setSelected(item.value)}
                className={`rounded-full ${item.value === selected ? 'bg-color6 dark:bg-dark' : 'bg-color-7 dark:bg-color10'} px-4 py-1`}
              >
                <Text className={item.value === selected ? 'font-bold' : ''}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <ScrollView className="mb-24" contentContainerClassName="mx-6">
          {founded && (
            <>
              <Text className="mb-3 text-2xl font-bold">Your Rank</Text>
              <View className="mb-8 flex-row justify-between rounded-2xl border border-color5 p-4 dark:bg-dark">
                <View className="flex-row items-center justify-center gap-4">
                  <Text className="text-3xl font-bold text-color5">
                    #{founded.id}
                  </Text>
                  <View>
                    <Text className="font-bold">{founded.name}</Text>
                    <Text className="font-light">{founded.track}</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold text-color5">
                    {founded.time}
                  </Text>
                  <Text className="text-sm font-light">Best Lap</Text>
                </View>
              </View>
            </>
          )}
          <FlashList
            className="flex-1"
            data={sortedList}
            estimatedItemSize={40}
            keyExtractor={(m) => String(m.name)}
            renderItem={({ item, index }) => (
              <View
                // @ts-ignore
                className={`mb-3 flex-1 flex-row justify-between rounded-2xl border dark:bg-dark ${item.isMe ? 'border-color5' : 'border-color4'} p-4`}
              >
                <View className="flex-row items-center justify-center gap-4">
                  <Text className="text-3xl font-bold text-color5">
                    #{index + 1}
                  </Text>
                  <View>
                    <Text className="font-bold">{item.name}</Text>
                    <Text className="font-light">{item.track}</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold text-color5">
                    {item.time}
                  </Text>
                  <Text className="text-sm font-light">Best Lap</Text>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Leaderboard;
