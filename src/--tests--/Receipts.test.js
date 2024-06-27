import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Receipts from '../components/Receipts';  // Assurez-vous de mettre le bon chemin
import axios from 'axios';

jest.mock('axios');

const receiptItems = [
  { name: 'Product A', quantity: 1, total: 120, date: '2023-01-01' },
  { name: 'Product B', quantity: 2, total: 440, date: '2023-02-01' },
];

test('renders receipt items', async () => {
  axios.get.mockResolvedValue({ data: receiptItems });

  render(<Receipts />);

  await waitFor(() => {
    receiptItems.forEach(item => {
      expect(screen.getByText(new RegExp(item.name, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.quantity.toString(), 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.total.toString(), 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.date, 'i'))).toBeInTheDocument();
    });
  });
});
