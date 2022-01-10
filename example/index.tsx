import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { scaleLinear } from "d3-scale";
import ReactMatrixTable from '../.';

const opacityScale = scaleLinear()
    .domain([1, 21])
    .range([100, 255]);

const App = () => {
  const props = {
    rows: ['January', 'February', 'March'],
    columns: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    data: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
    ],
    cellColorFunction: (value: number | string) => {
      const opacity = opacityScale(value);
      const color = `rgba(255, 0, 0, ${opacity / 255})`;
      return color;
    }
  };
  return (
    <div>
      <ReactMatrixTable
        rows={props.rows}
        columns={props.columns}
        data={props.data}
        cellColorFunction={props.cellColorFunction}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
