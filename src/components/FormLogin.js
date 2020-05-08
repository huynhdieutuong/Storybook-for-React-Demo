import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const FormLogin = (props) => {
  return (
    <Col xs='12' sm='6' md='4'>
      <Form>
        <FormGroup>
          <Label for='exampleEmail' hidden>
            Email
          </Label>
          <Input
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='Email'
          />
        </FormGroup>{' '}
        <FormGroup>
          <Label for='examplePassword' hidden>
            Password
          </Label>
          <Input
            type='password'
            name='password'
            id='examplePassword'
            placeholder='Password'
          />
        </FormGroup>{' '}
        <Button color='primary'>Login</Button>
      </Form>
    </Col>
  );
};

export default FormLogin;
