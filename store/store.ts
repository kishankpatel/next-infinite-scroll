import { configureStore } from "@reduxjs/toolkit";
import recruitsReducer from "./recruits";

export const store = configureStore({
  reducer: {
    recruits: recruitsReducer,
  },
});

// export function makeStore() {
//   return configureStore({
//     reducer: {
//       recruits: recruitsReducer,
//     },
//   });
// }

// export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;