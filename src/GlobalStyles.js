import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Palette from './lib/Palette';

const GlobalStyles = createGlobalStyle `
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Nanum Myeongjo';
        color: ${Palette.fontColor};
        overflow-x: hidden;
    }
`

export default GlobalStyles;