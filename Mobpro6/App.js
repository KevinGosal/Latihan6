import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Regist from './components/page/Regist'
import UsersPage from './components/page/UserPage'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState('Registration')  

  
  const changePage = (pageName) => {
    setPage(pageName)
  }

  if(page == 'Registration')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Regist registerButtonHandler={() => changePage('Result')}/>
      </View>
    )
  else if(page == 'Result')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <UsersPage/>
      </View>
    )
};

export default App;