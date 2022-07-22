import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el) => {
    const root = ReactDOM.createRoot(el);
    root.render(<App />);
};

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.getElementById('_marketing-dev-root');

    if(devRoot){
        mount(devRoot);
    }
}

export { mount };