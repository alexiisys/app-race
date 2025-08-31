import { create } from 'zustand';

import { createSelectors } from '@/lib/utils';
import { type Race } from '@/types/race';

import { getRaces, writeRaces } from './utils';

interface RaceState {
  races: Race[];
  readRaces: () => void;
  addRace: (race: Race) => void;
  deleteRace: (id: string) => void;
  updateRace: (race: Race) => void;
}

const _useRace = create<RaceState>((set, get) => ({
  races: [],

  readRaces: () => {
    set((state) => ({
      races: getRaces() ?? state.races,
    }));
  },

  addRace: (race: Race) => {
    set((state) => ({
      races: [...state.races, race],
    }));
    writeRaces(get().races);
  },

  deleteRace: (id: string) => {
    set((state) => ({
      races: state.races.filter((race) => race.id !== id),
    }));
    writeRaces(get().races);
  },

  updateRace: (race: Race) => {
    set((state) => ({
      races: state.races.map((m) => (m.id === race.id ? race : m)),
    }));
    writeRaces(get().races);
  },
}));

export const useRace = createSelectors(_useRace);

export const readRaces = _useRace.getState().readRaces;

export const addRace = (race: Race) => _useRace.getState().addRace(race);

export const deleteRace = _useRace.getState().deleteRace;

export const updateRace = (race: Race) => _useRace.getState().updateRace(race);
