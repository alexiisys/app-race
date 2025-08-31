import { getItem, setItem } from '@/lib/storage/helpers';
import { type Race } from '@/types/race';

const store = 'races';

export const getRaces = () => getItem<Race[]>(store);
export const writeRaces = (value: Race[]) => setItem<Race[]>(store, value);
