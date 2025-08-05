import { render, screen, fireEvent } from '@testing-library/react';
import AddList from '../components/addlist';

describe('AddList Component', () => {
  test('renders the input field', () => {
    render(<AddList />);
    expect(screen.getByPlaceholderText(/what needs to be done/i)).toBeInTheDocument();
  });

  test('updates state on input change', () => {
    render(<AddList />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
  });

  test('adds a new task on form submission', () => {
    render(<AddList />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});