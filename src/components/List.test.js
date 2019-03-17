import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import Store from '../store.js';
import renderer from 'react-test-renderer';



describe('test from displaying card component', ()=> {
    it('renders a list without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<List key={{id: "1"}}
                              cards={["b", "c", "d", "f", "h", "i", "k"]}
                              header={"Second list"}
                              store={Store}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', ()=> {
        const tree = renderer
            .create(<List key={{id: "1"}}
                          cards={["b", "c", "d", "f", "h", "i", "k"]}
                          header={"Second list"}
                          store={Store}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
