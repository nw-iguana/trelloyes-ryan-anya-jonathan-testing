import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';


describe('tests for displaying Card component',()=> {
    it('renders a card without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Card title="card-title" content="card content"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', ()=> {
        const tree = renderer
            .create(<Card title="card-title" content="card content" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});

