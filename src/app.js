import React from 'react';
import Page from './Page';

window.React = React;

React.render(
    React.createElement(Page, null),
    document.getElementById('app')
);
