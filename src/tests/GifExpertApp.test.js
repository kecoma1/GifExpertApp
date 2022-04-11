import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Tests on <GifExpertApp />:', () => {
    
    test('Should match the snapshot', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show a list of categories', () => {
        const categories = ['One punch', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
});