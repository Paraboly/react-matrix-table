import React, { useCallback } from 'react';
import styles from './style.module.css';

interface ReactMatrixTableProps {
  rows: (number | string)[];
  columns: (number | string)[];
  data: (number | string)[][];
  cellColorFunction?: (value: number | string) => string;
}

const ReactMatrixTable = ({
  rows,
  columns,
  data,
  cellColorFunction,
}: ReactMatrixTableProps): JSX.Element => {
  const getCellStyle = useCallback((
    value: number | string
  ): React.CSSProperties | undefined => {
    if (cellColorFunction) {
      return {
        backgroundColor: cellColorFunction(value),
      };
    }
    return undefined;
  }, []);

  const RmtHeader = (): JSX.Element => {
    return (
      <tr className="rmt-header">
        <td></td>
        {columns.map((col, index) => (
          <th key={index} scope="col" className={styles.rmtTh}>
            {col}
          </th>
        ))}
      </tr>
    );
  };

  const RmtBody = (): JSX.Element => {
    return (
      <>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th scope="row" className={styles.rmtTh}>
              {row}
            </th>
            {columns.map((_, colIndex) => (
              <td
                key={`${rowIndex}_${colIndex}`}
                className={styles.rmtTd}
                style={getCellStyle(data[rowIndex][colIndex])}
              >
                {data[rowIndex][colIndex]}
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };
  return (
    <div id="rmt-container">
      <table id="rmt-table" className={styles.rmtTable}>
        <caption className={styles.rmtCaption}>Matrix:</caption>
        <tbody>
          <RmtHeader />
          <RmtBody />
        </tbody>
      </table>
    </div>
  );
};

export default ReactMatrixTable;
