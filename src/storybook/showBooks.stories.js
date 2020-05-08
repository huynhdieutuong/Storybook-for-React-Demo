import React from 'react';
import BookCard from '../components/BookCard';
import BookTable from '../components/BookTable';

export default { title: 'Show Books' };

export const user = () => <BookCard />;

export const admin = () => <BookTable />;
