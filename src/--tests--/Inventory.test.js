import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Inventory from '../components/Inventory';
import axios from 'axios';

jest.mock('axios');

describe('Inventory Component', () => {
  it('renders inventory items', async () => {
    const inventoryItems = [
      { id: 1, name: 'Product A', quantity: 100 },
      { id: 2, name: 'Product B', quantity: 200 },
    ];

    axios.get.mockResolvedValue({ data: inventoryItems });

    render(<Inventory />);

    await waitFor(() => {
      inventoryItems.forEach(item => {
        expect(screen.getByText(new RegExp(item.name, 'i'))).toBeInTheDocument();
        expect(screen.getByText(new RegExp(item.quantity.toString(), 'i'))).toBeInTheDocument();
      });
    });
  });
});
