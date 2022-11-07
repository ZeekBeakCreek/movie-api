const Movielist = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="movies">
          <p>{movie.title}</p>
          <img src={movie.Poster} alt="movies" />
        </div>
      ))}
    </>
  );
};

export default Movielist;
