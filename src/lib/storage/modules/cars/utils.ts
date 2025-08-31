import { getItem, setItem } from '@/lib/storage/helpers';
import { type Car } from '@/types/car';

const store = 'cars';

export const getCars = () => getItem<Car[]>(store);
export const writeCars = (value: Car[]) => setItem<Car[]>(store, value);
