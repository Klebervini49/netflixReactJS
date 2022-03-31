/* eslint-disable default-case */
const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '96294916f7f6c1863ed7a6d1e4757eb4';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
};
/**
 * Originais da netflix
 * Recomendados
 * Em alta
 * Ação
 * Comédia
 * Terror
 * Romance
 * Documentarios
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais da Netflix',
                items: await basicFetch(
                    `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: 'recomendados',
                title: 'Recomendados',
                items: await basicFetch(
                    `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: 'alta',
                title: 'Em alta',
                items: await basicFetch(
                    `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: 'acao',
                title: 'Ação',
                items: await basicFetch(
                    `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: 'comedia',
                title: 'Comédia',
                items: await basicFetch(
                    `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: 'terror',
                title: 'Terror',
                items: await basicFetch(
                    `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(
                    `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: 'documentarios',
                title: 'Documentarios',
                items: await basicFetch(
                    `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(
                        `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`,
                    );
                    break;
                case 'tv':
                    info = await basicFetch(
                        `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`,
                    );
                    break;
            }
        }
        return info;
    },
};
