import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
    render(<Button>Teste</Button>)

    const buttonEl = screen.getByText('Teste');

    expect(buttonEl).toBeInTheDocument();
})