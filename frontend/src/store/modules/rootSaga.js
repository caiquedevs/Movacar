import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import drivers from './drivers/sagas';
import travels from './travels/sagas';

export default function* rootSaga() {
  return yield all([auth, drivers, travels]);
}
