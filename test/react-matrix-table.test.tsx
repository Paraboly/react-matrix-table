import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactMatrixTable from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const props = {
      rows: ['January', 'February', 'March'],
      columns: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      data: [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
      ]
    };
    const div = document.createElement('div');
    ReactDOM.render(<ReactMatrixTable {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
