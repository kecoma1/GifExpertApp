import { getGifs } from '../../helpers/getGifs';

describe('Tests with getGifs:', () => {
    test('Must bring 10 elements', async() => {
        const gifs = await getGifs('Gogeta');

        expect( gifs.length ).toBe(10);
    });

    test('Must bring 0 elements (empty string sent)', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe(0);
    });

    test('Must bring 0 elements (undefined sent)', async() => {
        const gifs = await getGifs();

        expect( gifs.length ).toBe(0);
    });
});