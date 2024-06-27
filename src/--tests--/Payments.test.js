import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Payments from '../components/Payments';
import axios from 'axios';

jest.mock('axios');

describe('Payments Component', () => {
  it('renders payment items', async () => {
    const paymentItems = [
      { id: 1, name: 'John Doe', amount: 100 },
      { id: 2, name: 'Jane Doe', amount: 200 },
    ];

    axios.get.mockResolvedValue({ data: paymentItems });

    render(<Payments />);

    await waitFor(() => {
      paymentItems.forEach(item => {
        expect(screen.getByText(new RegExp(item.name, 'i'))).toBeInTheDocument();
        expect(screen.getByText(new RegExp(item.amount.toString(), 'i'))).toBeInTheDocument();
      });
    });
  });
});
