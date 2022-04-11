import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />:', () => {


    test('Should show the component correctly', () => {
        const gifs = [{
            id: 'aaa',
            url: 'https://ladlffa//ananv',
            title: 'bbb'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category='Hola' /> );

        expect( wrapper ).toMatchSnapshot();
    });


    test('Should display items when images are loaded with useFetchGifs', () => {
        //const wrapper = shallow( <GifGrid category='Hola' /> );
        const gifs = [{
            id: 'aaa',
            url: 'https://ladlffa//ananv',
            title: 'bbb'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category='Hola' /> );

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });

});