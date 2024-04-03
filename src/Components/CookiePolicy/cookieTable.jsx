import React from 'react';

const TableRow = ({ name, purpose, duration, type }) => {
  return (
    <tr valign="top">
      <td style={{ border: '1px solid #2c2c2c' }}>
        <p style={{ padding: '10px', textAlign: 'center' }}>{name}</p>
      </td>
      <td style={{ border: '1px solid #2c2c2c' }}>
        <p style={{ padding: '10px', textAlign: 'center' }}>{purpose}</p>
      </td>
      <td style={{ border: '1px solid #2c2c2c' }}>
        <p style={{ padding: '10px', textAlign: 'center' }}>{duration}</p>
      </td>
      <td style={{ border: '1px solid #2c2c2c' }}>
        <p style={{ padding: '10px', textAlign: 'center' }}>{type}</p>
      </td>
    </tr>
  );
};

export default TableRow;
