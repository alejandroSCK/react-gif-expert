import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Add category test', () => {
    test('should change de box text value', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'saitama'}});

        expect( input.value ).toBe('saitama');
    });

    test('should call onNewCategory if the input has value', () => {
        const inputValue = 'saimata';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenLastCalledWith( inputValue );
    });

    test('should not call onNewCategoty if input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});