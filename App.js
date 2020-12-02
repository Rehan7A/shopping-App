import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers,applyMiddleware,compose } from 'redux'
import {Provider} from  'react-redux'
import productReducers from './store/reducers/productReducer'
import Screen from './navigation/ScreenNavigation'
import {composeWithDevTools,devToolsEnhancer } from 'remote-redux-devtools'
import Cart from '../shopping/store/reducers/cart'
import Order from './store/reducers/order'

const rootReducers = combineReducers({
  product : productReducers,  
  cart : Cart,
  orders : Order  
})


const store = createStore(rootReducers)

export default function App() {
  
  return (
    <Provider store={store} >
      <Screen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },    
});
