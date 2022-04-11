import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';


describe('Tests of the component <GifGridItem />:', () => {

    const title = 'titulo';
    const url   = 'https://aaa';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('Should show the component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should have an img with the same url and alt of the props', () => {
        const img = wrapper.find('img');
        const { src, alt } = img.props();

        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('should have the classes card animate__animated animate__fadeIn', () => { 
        const div = wrapper.find('div');
        const classes = div.prop('className')

        expect( classes.includes('animate__fadeIn') ).toBe( true );
        expect( classes.includes('animate__animated') ).toBe( true );
        expect( classes.includes('card') ).toBe( true );
    });
});