import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid test', () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
    })

    const category = 'One Punch';

    test('should show loading', () => {
        render(<GifGrid category={category}/>);
        expect( screen.getByText('Loading...') ).toBeTruthy();
        expect( screen.getByText(category) ).toBeTruthy();
    });

    test('should show iteam after loading', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});