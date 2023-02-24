import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GitItem unit test', () => {
    const title = "one punch man";
    const url = "https://media3.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=0628090eapy3zmtf83ya95eb6gy63upxucya2zh3po1myec2&rid=giphy.gif&ct=g";
    
    test('should match de snatshot', () => {
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the url and the alt', () => {
        render(<GifItem title={title} url={url}/>);
        const { src, alt } = screen.getByRole('img');
        expect( src).toBe(url);
        expect( alt).toBe(title);
    });

    test('should show the title', () => {
        render(<GifItem title={title} url={url}/>);
        expect( screen.getByText(title)).toBeTruthy();
    })
})