
"use client"
import React, {useState} from "react";
import MovieCard from './movieCard'

export default function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);


    const searchMovies = async (e)=> {
        e.preventDefault();
        //console.log("submitting");

        //const query = "Jurassic Park";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=186e654c924f39c1d44a3c6e03beca41&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
        
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        console.log(data);
            
        } catch(err){
            console.log(err);
        }

        
    }
    return (
        <>
            <form className="form" onSubmit = {searchMovies}> 
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value = {query} onChange= {(e)=> setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className= "card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}

            </div>
            
        </>
    )
}