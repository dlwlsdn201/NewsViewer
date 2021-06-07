import React, {useState, useEffect} from 'react';
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
    border-radius: 10px; 
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



const NewsList = ({category}) => {
    const API_KEY = 'f72290af08794eafb2893b02b4f21a5e';
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        //async를 사용하는 함수를 따로 선언.

        const LoadData = async () => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`,);
                setData(response.data.articles);
                console.log(response.data.articles);
            }catch(e){
                console.log(`error:${e}`);
            }
            setLoading(false);
        };
        LoadData();
    }, [category]);

    // console.log(data);
    if(loading){
        return <NewsListContainer>데이터 로드 중..</NewsListContainer>
    };

    if(!data) {
        return null;
    }

    return (
        <NewsListContainer>
            <NewsListWrapper>
                {data.map(article=> (<NewsItem key={article.url} article={article}/>))}
            </NewsListWrapper>
        </NewsListContainer>
    );
};

export default NewsList;