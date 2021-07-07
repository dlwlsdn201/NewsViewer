import React, {useState} from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Palette from '../lib/Palette';

const Header = styled.header`
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3vw;

    .title {
        margin: 0;
    }

`

const NewsPageContainer = styled.div`
    padding: 2% 3%;
    background: ${Palette.background};
    box-sizing: border-box;
`;

const NewsPageInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const ScrollButtonContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    right: 3%;
    bottom: 3%;

    
`

const ScrollTopButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 3vw;
    height: 3vw;
    margin-bottom: 3px;
    border: 1px solid white;
    opacity: ${props => props.toggle? .5 : 0};
    transition : opacity .2s ease;

    &:hover { 
        background: ${Palette.highlight};
        cursor: pointer;
        opacity : 1;
        transition : background .3s ease, opacity .3s ease ;
    }
`


const NewsPage = ({match}) => {
    const [toggleTop, setToggleTop] = useState(null);
    const [toggleBottom, setToggleBottom] = useState(null);
    
    const category = match.params.category || 'all';

    const handleScrollTop = (type) => {
        if(type === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }else {
            const root = document.querySelector('#root');
            window.scrollTo({top: root.scrollHeight, behavior: 'smooth'});
        }
    }

    // const toggleTopButton = (result) => {
    //     setToggle()
    // }

    window.addEventListener('scroll', function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 180 && window.pageYOffset < 2206) {
            setToggleTop(true);
            setToggleBottom(true);
        }
        else if (window.pageYOffset < 180){
            setToggleTop(false);
            setToggleBottom(true);
        }else {
            setToggleBottom(false);
        }
    })
    return (
        <NewsPageContainer>
            <Header>
                <HeaderWrapper>
                    <h1 className="title">Free News Web Service</h1>
                </HeaderWrapper>
            </Header>
            <NewsPageInner>
                <Categories/>
                <NewsList category={category}/>
                <ScrollButtonContainer>
                    <ScrollTopButton toggle={toggleTop} type='top' onClick={()=>handleScrollTop('top')}>
                        Top
                    </ScrollTopButton>
                    <ScrollTopButton toggle={toggleBottom} type='bottom' onClick={()=>handleScrollTop('bottom')}>
                        Bottom
                    </ScrollTopButton>
                </ScrollButtonContainer>
            </NewsPageInner>
        </NewsPageContainer>
    );
};

export default NewsPage;