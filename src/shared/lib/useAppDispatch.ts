import { useDispatch } from 'react-redux';
import { createReduxStore } from '~/app/providers/StoreProvider';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
