import { create } from 'zustand';

import { createSelectors } from '@/lib/utils';
import { type Car } from '@/types/car';

import { getCars, writeCars } from './utils';

interface CarState {
  cars: Car[];
  readCars: () => void;
  addCar: (movie: Car) => void;
  deleteCar: (id: string) => void;
  updateCar: (movie: Car) => void;
}

const _useCar = create<CarState>((set, get) => ({
  cars: [],

  readCars: () => {
    set((state) => ({
      cars: getCars() ?? state.cars,
    }));
  },

  addCar: (movie: Car) => {
    set((state) => ({
      cars: [...state.cars, movie],
    }));
    writeCars(get().cars);
  },

  deleteCar: (id: string) => {
    set((state) => ({
      cars: state.cars.filter((movie) => movie.id !== id),
    }));
    writeCars(get().cars);
  },

  updateCar: (movie: Car) => {
    set((state) => ({
      cars: state.cars.map((m) => (m.id === movie.id ? movie : m)),
    }));
    writeCars(get().cars);
  },
}));

export const useCar = createSelectors(_useCar);

export const readCars = _useCar.getState().readCars;

export const addCar = (movie: Car) => _useCar.getState().addCar(movie);

export const deleteCar = _useCar.getState().deleteCar;

export const updateCar = (movie: Car) => _useCar.getState().updateCar(movie);
