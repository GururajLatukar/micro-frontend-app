import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = new createGenerateClassName({
    productionPrefix: 'co'
});

export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    </StylesProvider>
  )
}
