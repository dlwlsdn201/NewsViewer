import React from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';
import styled from 'styled-components';


const NewsPageContainer = styled.div`
    padding: 2% 3%;
    background: #161616;
    box-sizing: border-box;
`;

const NewsPageInner = styled.div`
    
`;

const NewsPage = () => {
    return (
        <NewsPageContainer>
            <NewsPageInner>
                <Categories/>
                <NewsList/>
            </NewsPageInner>
        </NewsPageContainer>
    );
};

export default NewsPage;