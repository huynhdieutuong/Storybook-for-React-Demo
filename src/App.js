import React from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

import Menu from './components/Menu';
import Buttons from './components/Buttons';
import BookCard from './components/BookCard';
import BookTable from './components/BookTable';
import Paginations from './components/Paginations';
import FormLogin from './components/FormLogin';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Container>
        <Row>
          <Buttons />
        </Row>
        <Row>
          <BookCard />
        </Row>
        <Row>
          <BookTable />
        </Row>
        <Row>
          <Paginations />
        </Row>
        <Row>
          <FormLogin />
        </Row>
        <Row>
          <Search />
        </Row>
      </Container>
    </div>
  );
}

export default App;
