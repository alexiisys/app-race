import { create } from 'zustand';

import { createSelectors } from '@/lib/utils';
import { type Profile, type Settings } from '@/types/settings';

import { getSettings, writeSettings } from './utils';

interface AccountState {
  settings: Settings;
  readSettings: () => void;
  setCarId: (id: string) => void;
  setTrackId: (id: string) => void;
  setProfile: (profile: Profile) => void;
}

const _useSetting = create<AccountState>((set, get) => ({
  settings: {
    selectedCar: '',
    selectedTrack: '',
    profile: {
      name: 'player',
      level: '1',
      xp: '0',
      money: '0',
    },
  },
  readSettings: () => {
    const new_settings = {
      selectedCar: getSettings()?.selectedCar,
      selectedTrack: getSettings()?.selectedTrack,
      profile: getSettings()?.profile,
    };

    set((state) => ({
      settings: {
        selectedCar: new_settings.selectedCar ?? state.settings.selectedCar,
        selectedTrack:
          new_settings.selectedTrack ?? state.settings.selectedTrack,
        profile: new_settings.profile ?? state.settings.profile,
      },
    }));
  },
  setCarId: (id: string) => {
    set((state) => ({
      settings: {
        ...state.settings,
        selectedCar: id,
      },
    }));
    writeSettings(get().settings);
  },
  setTrackId: (id: string) => {
    set((state) => ({
      settings: {
        ...state.settings,
        selectedTrack: id,
      },
    }));
    writeSettings(get().settings);
  },
  setProfile: (profile: Profile) => {
    set((state) => ({
      settings: {
        ...state.settings,
        profile,
      },
    }));
    writeSettings(get().settings);
  },
}));

export const useSetting = createSelectors(_useSetting);
export const readSettings = () => _useSetting.getState().readSettings();
export const setCarId = _useSetting.getState().setCarId;
export const setTrackId = _useSetting.getState().setTrackId;
export const setProfile = _useSetting.getState().setProfile;
