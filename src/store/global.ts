import { create } from 'zustand';

type State = {
  isModalOpen: boolean;
};

type Actions = {
  toggleModal: () => void;
};

export const useGlobalStore = create<State & Actions>((set) => ({
  isModalOpen: false,

  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
