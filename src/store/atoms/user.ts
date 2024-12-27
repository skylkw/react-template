import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

interface User {
  id: string;
  name: string;
  email: string;
}

export const userAtom = atomWithStorage<User | null>('user', null);

export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null);
