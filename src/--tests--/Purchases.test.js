import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Purchases from '../components/Purchases';  // Assurez-vous de mettre le bon chemin
import axios from 'axios';

jest.mock('axios');

const purchaseItems = [
  { item: 'Product A', quantity: 10, price: 50 },
  { item: 'Product B', quantity: 5, price: 100 },
];

test('renders purchase items', async () => {
  axios.get.mockResolvedValue({ data: purchaseItems });

  render(<Purchases />);

  await waitFor(() => {
    purchaseItems.forEach(item => {
      expect(screen.getByText(new RegExp(item.item, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.quantity.toString(), 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(item.price.toString(), 'i'))).toBeInTheDocument();
    });
  });
});
