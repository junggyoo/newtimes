import { create } from 'zustand';

type State = {
  isModalOpen: boolean;
  filter: {
    headline: string;
    date: string;
    countries: string[];
  };
};

type Actions = {
  toggleModal: () => void;
  setFilter: (filter: State['filter']) => void;
};

export const useGlobalStore = create<State & Actions>((set) => ({
  isModalOpen: false,
  filter: {
    headline: '',
    date: '',
    countries: [],
  },

  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  setFilter: (filter) => set({ filter }),
}));
