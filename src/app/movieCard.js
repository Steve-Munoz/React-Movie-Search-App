import Image from 'next/image';

export default function MovieCard({movie}){
    return(
        <div className="card">
            <Image
                className="card--image"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title} poster`}
                width={500}
                height={700}
            />
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p><small>POPULARITY: {movie.popularity}</small></p>
                <p className="card--desc">{movie.overview}</p>
            </div>
        </div>
    )
}