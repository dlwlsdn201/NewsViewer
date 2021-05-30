import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import GlobalStyles from './GlobalStyles';

const App = () => {

  return (
    <>
      <NewsPage/>
      <GlobalStyles/>
    </>
  );
};

export default App;