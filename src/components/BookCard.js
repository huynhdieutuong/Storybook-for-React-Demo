import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Col } from 'reactstrap';

import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
  return (
    <div>
      <Col xs='6' sm='4' md='3'>
        <Card>
          <CardImg top width='100%' src={book.coverUrl} alt={book.title} />
          <CardBody>
            <CardTitle>{book.title}</CardTitle>
            <Button color='success'>Add To Cart</Button>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

BookCard.defaultProps = {
  book: {
    coverUrl:
      'http://res.cloudinary.com/dbu9wn1oz/image/upload/v1588063992/BookManagement/Books/44097e2564552393c84d8c1f1b4af54d.jpg',
    title: "Gandhi's Life in His Own Words",
  },
};

BookCard.propTypes = {
  book: PropTypes.shape({
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default BookCard;
