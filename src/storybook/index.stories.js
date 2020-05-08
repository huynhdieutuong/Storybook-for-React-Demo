import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default { title: 'Buttons' };

export const view = () => <Button color='primary'>View</Button>;

export const edit = () => <Button color='warning'>Edit</Button>;

export const deleteBtn = () => <Button color='danger'>Delete</Button>;

export const addToCart = () => <Button color='success'>Add To Cart</Button>;

export const add = () => <Button color='primary'>Add</Button>;
