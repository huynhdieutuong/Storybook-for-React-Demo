import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Col } from 'reactstrap';

const Search = (props) => {
  return (
    <Col xs='12' sm='6' md='4'>
      <InputGroup>
        <Input />
        <InputGroupAddon addonType='append'>
          <Button color='primary'>Search</Button>
        </InputGroupAddon>
      </InputGroup>
      <br />
    </Col>
  );
};

export default Search;
