import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FocusAwareStatusBar, Plus, Text, useModal } from '@/components/ui';
import AddVehicleModal from '@/components/ui/modals/add-vehicle-modal';

const Garage = () => {
  const insets = useSafeAreaInsets();
  const refModal = useModal();
  return (
    <>
      <FocusAwareStatusBar />
      <View
        className="flex-1 gap-4 bg-white dark:bg-black"
        style={{ paddingTop: insets.top + 20 }}
      >
        <View className="mx-6 flex-row items-center justify-between">
          <View className="gap-2">
            <Text className="text-3xl font-bold">My Garage</Text>
            <Text className="font-light">4 vehicles</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            contentContainerClassName="flex-row self-start mx-6 gap-4 items-start"
          >
            <View className="rounded-full bg-color6 px-4 py-1">
              <Text className="font-bold">All</Text>
            </View>
            <View className="rounded-full bg-color7 px-4 py-1">
              <Text className="">Classic</Text>
            </View>
            <View className="rounded-full bg-color7 px-4 py-1">
              <Text className="">Sports</Text>
            </View>
            <View className="rounded-full bg-color7 px-4 py-1">
              <Text className="">Hypercars</Text>
            </View>
          </ScrollView>
        </View>
        <View className="mx-4 flex-1">
          <Text className="mx-2 mb-5 text-2xl font-bold">Cars</Text>
          <FlashList
            className="flex-1"
            data={[1, 2, 3, 4, 5, 6]}
            estimatedItemSize={40}
            numColumns={2}
            keyExtractor={(m) => String(m)}
            renderItem={({ item }) =>
              item !== 1 ? (
                <View className="m-2 flex-1 flex-row justify-between rounded-xl border border-color4 ">
                  <View className="w-[65%] py-6 pl-3">
                    <Text className="font-bold">
                      Lightning 1234123412341234
                    </Text>
                    <Text className="font-light">Sports Car</Text>
                  </View>
                  <View className="w-[25%] flex-row items-center gap-2 py-2 pr-1">
                    <View className="items-center gap-2">
                      <View className="size-3 bg-backgroundInput" />
                      <View
                        style={{ height: 50, width: 10 }}
                        className="justify-end rounded-sm border border-color5"
                      >
                        <View
                          className="w-full bg-red"
                          style={{ height: '70%' }}
                        />
                      </View>
                    </View>
                    <View className="items-center gap-2">
                      <View className="size-3 bg-backgroundInput" />
                      <View
                        style={{ height: 50, width: 10 }}
                        className="justify-end rounded-sm border border-color5"
                      >
                        <View
                          className="w-full bg-red"
                          style={{ height: '70%' }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => refModal.present()}
                  className="m-2 h-28 flex-1 items-center justify-center rounded-xl border-2 border-dashed border-color5"
                >
                  <View className="flex-row items-center justify-center gap-3">
                    <View className="rounded-full border-2 border-dashed border-color5 p-1">
                      <Plus color={'black'} />
                    </View>
                    <Text className="font-medium">Add Vehicle</Text>
                  </View>
                </TouchableOpacity>
              )
            }
            scrollEnabled={false}
          />
        </View>
        <AddVehicleModal ref={refModal.ref} />
      </View>
    </>
  );
};

export default Garage;
