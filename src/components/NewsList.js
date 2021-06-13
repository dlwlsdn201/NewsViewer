import React from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';
import Skeleton from '@material-ui/lab/Skeleton';

const NewsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    border: 1px solid blue;
    border-radius: 10px; 
`;

const NewsListWrapper = styled.ul`
    width: 90%;
    display: flex;
    /* flex-flow: column wrap; */
    flex-wrap: wrap;
    /* justify-content: space-around; */
    align-items: center;
    list-style: none;
    border: 2px solid green;
    padding: 1% 2%;
`



const NewsList = ({category}) => {

    const API_KEY = 'f72290af08794eafb2893b02b4f21a5e';

    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`,);
    }, [category]);

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);

    // useEffect(()=> {
    //     //async를 사용하는 함수를 따로 선언.

    //     const LoadData = async () => {
    //         setLoading(true);
    //         try{
    //             // const query = category === 'all' ? '' : `&category=${category}`;
    //             // const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`,);
    //             setData(response.data.articles);
    //             console.log(response.data.articles);
    //         }catch(e){
    //             console.log(`error:${e}`);
    //         }
    //         setLoading(false);
    //     };
    //     LoadData();
    // }, [category]);

    // console.log(data);
    // if(loading){
    //     return <NewsListContainer>

    //     </NewsListContainer>
    // };

    //아직 response가 정의되지 않았을 때
    if(!response) {
        return null;
    }

    if (error) {
        return <NewsListContainer>에러 발생</NewsListContainer>
    }

    // if(!data) {
    //     return null;
    // }

    const { articles } = response.data;
    console.log(response.data);
    return (
        (loading ?
        <Skeleton/> : 
        <NewsListContainer>
            <NewsListWrapper>
                {articles.map(article=>
                    <NewsItem key={article.url} article={article}/> 
                )}
            </NewsListWrapper>
        </NewsListContainer>
        )
    );
};

export default NewsList;