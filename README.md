# React Matrix Table

> Simple matrix table for react

[![NPM](https://img.shields.io/npm/v/@paraboly/react-matrix-table.svg)](https://www.npmjs.com/package/@paraboly/react-matrix-table)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/paraboly/react-apexcharts-dynamic-config/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Demo
![alt text](https://raw.githubusercontent.com/Paraboly/react-matrix-table/main/example/example.png)

Check example folder

## Install

```bash
npm install --save @paraboly/react-matrix-table
```

## Usage

```tsx
import React from 'react';
import { scaleLinear } from 'd3-scale';
import ReactMatrixTable from '@paraboly/react-matrix-table';

const opacityScale = scaleLinear()
  .domain([1, 21])
  .range([100, 255]);

const RmtExample = (): React.ReactElement => {
  const props = {
    rows: ['January', 'February', 'March'],
    columns: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
    ],
    cellColorFunction: (value: number | string) => {
      const opacity = opacityScale(value);
      const color = `rgba(255, 0, 0, ${opacity / 255})`;
      return color;
    },
  };

  return (
    <ReactMatrixTable
      rows={props.rows}
      columns={props.columns}
      data={props.data}
      cellColorFunction={props.cellColorFunction}
    />
  );
};

export default RmtExample;
```

## Details

| Props             |                                  Definition                                  |                                  Type |   Default | Required |
| ----------------- | :--------------------------------------------------------------------------: | ------------------------------------: | --------: | -------: |
| caption           |                         Caption for the matrix table                         |                              `string` |         - |    false |
| rows              |                              Matrix row labels                               |                            `string[]` |         - |     true |
| columns           |                             Matrix column labels                             |                            `string[]` |         - |     true |
| data              |                            Data for matrix cells                             |              `(string \| number)[][]` |         - |     true |
| cellColorFunction | Cell color function which should return color code compatible with css color | `(value: number \| string) => string` | undefined |    false |

## License

MIT © [SchemeSonic](https://github.com/SchemeSonic)@[Paraboly](https://www.paraboly.com)
