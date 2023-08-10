import { View } from 'react-native';
import {Route, Routes, } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import Signup from './Signup';
import MyReviews from './MyReviews';

const Main = () => {
  return (
    <View>
        <AppBar/>
        <Routes>
          <Route path='/' element={<RepositoryList/>} exact/>
          <Route path='/:id' element={<SingleRepository exact/>}/>
          <Route path='/sign-in' element={<SignIn />} exact/>
          <Route path='/create-review' element={<CreateReview />} exact/>
          <Route path='/sign-up' element={<Signup />} exact/>
          <Route path='/my-reviews' element={<MyReviews />} exact/>
        </Routes>
    </View>
  );
};

export default Main;