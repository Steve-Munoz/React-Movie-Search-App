
// "use client"
// import React, {useState} from "react";
// import MovieCard from './movieCard'

// export default function SearchMovies(){

//     const [query, setQuery] = useState('');
//     const [movies, setMovies] = useState([]);


//     // const searchMovies = async (e)=> {
//     //     e.preventDefault();
//     //     //console.log("submitting");

//     //     //const query = "Jurassic Park";
//     //     const url = `https://api.themoviedb.org/3/search/movie?api_key=186e654c924f39c1d44a3c6e03beca41&language=en-US&query=${query}&page=1&include_adult=false`;

//     //     try {
        
//     //     const res = await fetch(url);
//     //     const data = await res.json();
//     //     setMovies(data.results)
//     //     console.log(data);
            
//     //     } catch(err){
//     //         console.log(err);
//     //     }

        
//     // }

// //Arrow functions use an implicit return
// //The "this" keyword is mainly used when we have functions inside of objects.
// //Functions inside of object are known as methods and the "this" keyword refers to the object
// //..that is responsible for executing the function.
// //Arrow functions do not have their own "this" binding
// //With a regular function "this" represents the object that calls the function.
// //With an arrow function this represents the owner of the function, i.e window.
// //We shouldn't use arrow functions as direct methods if we know we want to access properties in the object using "this"
// // For arrow functions the value of "this" keyword is determined upon the lexical scope
//     const searchMovies = async (e)=>{
//         e.preventDefault(); // a method used to prevent the default behavior of a specified event from occuring.  
//                             //By default, when certain events such as form submissions or link clicks occur
//                             //the browser performs specific actions like refreshing the page or navigationg to a
//                             // new URL. With this method we can intercept and override this default behavior,
//                             //giving us more control over how our web pllication responds to user interactions
//         const url = `https://api.themoviedb.org/3/search/movie?api_key=186e654c924f39c1d44a3c6e03beca41&language=en-US&query=${query}&page=1&include_adult=false`
//         try{// I want you to try this code and if it doesnt work then this how I want you to handle this error
//             const res = await fetch(url)
//             const data = res.json();
//             setMovies(data.results)
//         } catch(err){
//             console.log(err)
//         }


//     }

 
//     return (
//         <>
//             <form className="form" onSubmit={searchMovies}>
//                 <label className="label" htmlFor="query">Movie Name</label>
//                 <input className="input" type="text" name="query"
//                     placeholder="i.e. Jurassic Park"
//                     value={query} onChange={(e) => setQuery(e.target.value)}
//                     />
//                 <button className="button" type="submit">Search</button>
//             </form>
//             <div className="card-list">
//                 {movies.filter(movie => movie.poster_path).map(movie => (
//                    <MovieCard movie={movie} key={movie.id} />
//                 ))}
//             </div>    
//         </>
//     )
// }
"use client"
import React, {useState} from "react";
import MovieCard from './movieCard.js';
export default function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>    
        </>
    )
}

<div>
    {movies.filter(movie=> movie.poster_path).map(movie =>(
        <MovieCard movie ={movie} key = {movie.id}/>
    ))}
</div>