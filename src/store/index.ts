import configureStore from 'store/configureStore';
import { RootState } from 'store/types';

const initState: Partial<RootState> = {};

export default configureStore(initState);
