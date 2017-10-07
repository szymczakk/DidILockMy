import { createStore } from 'redux';
import dilmdApp from './reducers';

export default () =>{
  const store = createStore(dilmdApp, {locked: false, TOSRead: false});
  
  store.subscribe(()=> console.log(store.getState()));

  console.log(store.getState());

  return store;
}