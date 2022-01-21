import { render, screen } from '@testing-library/react';
import Employees from './Employees'

// Tests do not pass at the moment

describe('Employees component', () => {
  test('renders Current Employees heading', () => {
    render(<Employees />);
    const currentEmployeesElement = screen.getByText('Current Employees', { exact: true })
    expect(currentEmployeesElement).toBeInTheDocument();
  })

  test('renders employee from json response', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: '123abc', firstName: 'Sam'}, {id: '123abd', firstName: 'Manny'}],
    });

    render(<Employees />);
    const employees = await screen.findAllByRole('heading', { level: 3 }, { timeout: 3000 });
    expect(employees).not.toHaveLength(0);
  })
})