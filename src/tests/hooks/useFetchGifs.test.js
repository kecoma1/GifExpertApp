import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Tests on the custom hook useFetchGifs', () => {

    test('Must return the initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( async() => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('Must return an array of imgs and loading must be false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();
        

        const { data, loading } = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toBe(false);
    });
});