import { selector } from "recoil";
import {countAtom} from "../atoms/count"

export const isEvenSelector = selector({
    key: 'isEvenSelector',
    get: ({ get }) => {
      const count = get(countAtom);
      return count % 2 ;
    },
  });