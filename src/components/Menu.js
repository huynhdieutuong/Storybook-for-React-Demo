import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <Container>
          <NavbarBrand href='/'>Book Management</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='#'>Books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Cart (0)</NavLink>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hi Name
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href='#'>Transaction</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href='#'>Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href='#'>Go to my shop</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href='#'>Create your shop</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
