import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card';

describe('components - Cards.js - test', () => {

    test('Should match snapshot showing all the component', () => {
        const { container } = render(<Card />);
        expect(container).toMatchSnapshot();
    });
    test('Should render the card img', () => {
        render(<Card />);
        const imagen = screen.getByRole('img', { name: 'imagen' });
        expect(imagen).toBeInTheDocument();
    });
    test('Should render the card title', () => {
        render(<Card />);
        expect(screen.getByText(/Lead./i)).toBeTruthy();
    })
    test('Should render the correct number of tags', () => {
        const { container } = render(<Card />);
        const titleTag = container.getElementsByTagName('h3');
        expect(titleTag.length).toBe(1);
    })
});