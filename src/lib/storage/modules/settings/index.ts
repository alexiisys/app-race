import { create } from 'zustand';

import { createSelectors } from '@/lib/utils';
import { type Settings } from '@/types/settings';

import { getSettings, writeSettings } from './utils';

interface AccountState {
  settings: Settings;
  readSettings: () => void;
  setCarId: (id: string) => void;
  setTrackId: (id: string) => void;
}

const _useSetting = create<AccountState>((set, get) => ({
  settings: {
    selectedCar: '',
    selectedTrack: '',
  },
  readSettings: () => {
    set((state) => ({ settings: getSettings() || state.settings }));
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
}));

export const useSetting = createSelectors(_useSetting);
export const readSettings = () => _useSetting.getState().readSettings();
export const setCarId = _useSetting.getState().setCarId;
export const setTrackId = _useSetting.getState().setTrackId;
