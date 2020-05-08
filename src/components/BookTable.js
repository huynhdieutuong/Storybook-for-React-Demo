import React from 'react';
import { Table, Button } from 'reactstrap';

import PropTypes from 'prop-types';

const BookTable = ({ book }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              style={{ width: '60px' }}
              src={book.coverUrl}
              alt={book.title}
            />
          </td>
          <td>{book.title}</td>
          <td>
            <Button color='primary'>View</Button>{' '}
            <Button color='warning'>Edit</Button>{' '}
            <Button color='danger'>Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

BookTable.defaultProps = {
  book: {
    coverUrl:
      'http://res.cloudinary.com/dbu9wn1oz/image/upload/v1588063992/BookManagement/Books/44097e2564552393c84d8c1f1b4af54d.jpg',
    title: "Gandhi's Life in His Own Words",
  },
};

BookTable.propTypes = {
  book: PropTypes.shape({
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default BookTable;
