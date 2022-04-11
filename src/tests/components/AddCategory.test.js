import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests on <AddCategory />:', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('Should display the component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should change the textbox', () => { 
        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('change', {
            target: {
                value
            }
        });
    });

    test('Should NOT post information on the submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled()
    });

    test('Should call the setCategories and print the textbot', () => {
        const value = 'Hola test'

        // Introducing the input
        wrapper.find('input').simulate('change', { target: { value }});

        // Submitting
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    });

});