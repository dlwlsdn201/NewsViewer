import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Palette from '../lib/Palette';
import FontSize from '../lib/FontSize';
import { ToggleButton } from '@material-ui/lab';

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
    overflow-y: hidden;
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
    font-size: ${FontSize.$BUTTON_Title};
    
`

const ScrollButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 3.5vw;
    height: 3.5vw;
    margin-bottom: 3px;
    border: 1px solid white;
    opacity: ${props => props.toggle? .5 : 0};
    visibility: ${props => props.toggle ? 'visible' : 'hidden' };
    transition : opacity .2s ease, visibility .5s ease;
    

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
    const root = document.querySelector('#root');
    const category = match.params.category || 'all';

    useEffect(() => {
        handleUpdateScrollState();

    });
    
    const handleScrollButton = (type) => {
        console.log('handleScrollButton');
        if(type === 'top') {
            window.scrollTo({ top: 50, behavior: 'smooth' });
        }else {
            window.scrollTo({top: root.scrollHeight, behavior: 'smooth'});
        }
    }

    const handleGetWindow = (attr) => {
        if(attr === 'Height'){
            return window.innerHeight;
        }
        if(attr === 'YOffset')
            return window.pageYOffset;
    }

    const handleUpdateScrollState = () => {
        let scrollLength =  handleGetWindow('Height'); //962
        let scrollLocation = handleGetWindow('YOffset');
        let rootHeight = root.scrollHeight; //3005
        let maxScrollLocation = rootHeight - scrollLength; 
        console.log('scrollLocation:', scrollLocation);
        console.log('maxScrollLocation:', maxScrollLocation);
        if(scrollLocation > 0 && scrollLocation < (maxScrollLocation - 5)) {
            setToggleTop(true);
            setToggleBottom(true);
        }
        else if (scrollLocation > 0 && scrollLocation > (maxScrollLocation - 5)){
            setToggleTop(true);
            setToggleBottom(false);
        }else if (scrollLocation < 1 ) {
            setToggleTop(false);
            setToggleBottom(true);
        }
    }

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
                    <ScrollButton 
                        toggle={toggleTop} 
                        type='top' 
                        onClick={()=>handleScrollButton('top')}>
                        Top
                    </ScrollButton>
                    <ScrollButton 
                        toggle={toggleBottom} 
                        type='bottom' 
                        onClick={()=>handleScrollButton('bottom')}>
                        Bottom
                    </ScrollButton>
                </ScrollButtonContainer>
            </NewsPageInner>
        </NewsPageContainer>
    );
};

export default NewsPage;