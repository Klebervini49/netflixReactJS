import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './componentes/movieRow/MovieRow';
import FeaturedeMovie from './componentes/FeaturedMovie.js/FeaturedeMovie';

const App = () => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            let lista = await Tmdb.getHomeList();
            setMovieList(lista);

            let originais = lista.filter((i) => i.slug === 'originais');
            let randomChosen = Math.floor(
                Math.random() * originais[0].items.results.length - 1,
            );
            let chosen = originais[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeatureData(chosenInfo);
        };
        loadAll();
    }, []);

    return (
        <div className="page">
            {featureData && <FeaturedeMovie item={featureData} />}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    );
};

export default App;
