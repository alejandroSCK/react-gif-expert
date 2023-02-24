import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GitExpertApp";

describe('GifExpertApp test', () => {
    test('snapshot initial state', () => {
        const { container } = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    });

    test('Should add new category', () => {
        const inputValue = 'Dark Souls';

        render(<GifExpertApp/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit(form);

        expect( screen.getByText(inputValue) ).toBeTruthy();
    });

    test('should show image', async() => {
        render(<GifExpertApp/>);

        await waitFor(() => expect(screen.getAllByRole('img').length).toBeGreaterThan(0));

        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    });
});