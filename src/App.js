import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import NewsItem from './pages/NewsItem';
import NewsList from './pages/NewsList';


const App = () => {

  const API_KEY = 'f72290af08794eafb2893b02b4f21a5e';
  const [data, setData] = useState(null);
  
  
  const onClick = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`).then((response) => {
      setData(response);
    });

  };

  return (
    <div>
      <button onClick={onClick}>데이터 불러오기</button>
      <textarea cols="30" rows="10" value={JSON.stringify(data, null, 2)} readOnly></textarea>
    </div>
  );
};

export default App;