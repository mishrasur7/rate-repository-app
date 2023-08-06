import { View } from 'react-native';
import {Route, Routes, } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';

const Main = () => {
  return (
    <View>
        <AppBar/>
        <Routes>
          <Route path='/' element={<RepositoryList/>} exact/>
          <Route path='/:id' element={<SingleRepository exact/>}/>
          <Route path='/sign-in' element={<SignIn />} exact/>
        </Routes>
    </View>
  );
};

export default Main;