import React, {useState} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components';


const NewsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid blue;
    height: 100%;
`;

const NewsListWrapper = styled.ul`
    width: 90%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    list-style: none;
    border: 2px solid green;
    padding: 1% 0;
`



const NewsList = () => {
    const API_KEY = 'f72290af08794eafb2893b02b4f21a5e';
  const [data, setData] = useState(null);
  
  
  const onClick = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`).then((response) => {
      setData(response);
    });

  };

    return (
        <NewsListContainer>
            <NewsListWrapper>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </NewsListWrapper>
        </NewsListContainer>
    );
};

export default NewsList;