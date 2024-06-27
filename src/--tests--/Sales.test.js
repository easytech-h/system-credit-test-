import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Sales from '../components/Sales';  // Assurez-vous de mettre le bon chemin
import axios from 'axios';

jest.mock('axios');

const saleItems = [
  { item: 'Product A', quantity: 2, price: 120 },
  { item: 'Product B', quantity: 1, price: 220 },
];

test('renders sale items', async () => {
  axios.get.mockResolvedValue({ data: saleItems });

  render(<Sales />);

  await waitFor(() => {
    saleItems.forEach(item => {
      expect(screen.getByText(new RegExp(item.item, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.quantity.toString(), 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.price.toString(), 'i'))).toBeInTheDocument();
    });
  });
});
