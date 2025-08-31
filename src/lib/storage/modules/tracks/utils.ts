import { getItem, setItem } from '@/lib/storage/helpers';
import { type Track } from '@/types/track';

const store = 'track';

export const getTracks = () => getItem<Track[]>(store);
export const writeTracks = (value: Track[]) => setItem<Track[]>(store, value);
