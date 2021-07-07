import React, {useState, useCallback} from 'react';
import { Route, Link } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import GlobalStyles from './GlobalStyles';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);


  // path에 ? 표시 : 선택적 쿼리문(category 값이 있을수도 없을수도 있다.)

  return (
    <>
      <Route path="/:category?" component={NewsPage}/>
      <GlobalStyles/>
    </>
  );
};

export default App;