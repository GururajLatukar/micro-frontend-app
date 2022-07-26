import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = new createGenerateClassName({
    productionPrefix: 'ma'
});

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName} >
            <BrowserRouter>
                <Routes>
                    <Route exact path="/pricing" element={<Pricing />} />
                    <Route exact path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </StylesProvider>
    </div>
};