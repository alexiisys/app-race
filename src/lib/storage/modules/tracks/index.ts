import { create } from 'zustand';

import { createSelectors } from '@/lib/utils';
import { type Track } from '@/types/track';

import { getTracks, writeTracks } from './utils';

interface TrackState {
  tracks: Track[];
  readTracks: () => void;
  addTrack: (track: Track) => void;
  deleteTrack: (id: string) => void;
  updateTrack: (track: Track) => void;
}

const _useTrack = create<TrackState>((set, get) => ({
  tracks: [],

  readTracks: () => {
    set((state) => ({
      tracks: getTracks() ?? state.tracks,
    }));
  },

  addTrack: (track: Track) => {
    set((state) => ({
      tracks: [...state.tracks, track],
    }));
    writeTracks(get().tracks);
  },

  deleteTrack: (id: string) => {
    set((state) => ({
      tracks: state.tracks.filter((track) => track.id !== id),
    }));
    writeTracks(get().tracks);
  },

  updateTrack: (track: Track) => {
    set((state) => ({
      tracks: state.tracks.map((m) => (m.id === track.id ? track : m)),
    }));
    writeTracks(get().tracks);
  },
}));

export const useTrack = createSelectors(_useTrack);

export const readTracks = _useTrack.getState().readTracks;

export const addTrack = (track: Track) => _useTrack.getState().addTrack(track);

export const deleteTrack = _useTrack.getState().deleteTrack;

export const updateTrack = (track: Track) =>
  _useTrack.getState().updateTrack(track);
