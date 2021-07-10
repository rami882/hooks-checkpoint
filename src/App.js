import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { moviesData } from "./data";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Moviedescreption from "./components/Moviedescreption";


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  //adding movies to the list
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  // handle rating
  const handleRating = (newRate) => setSearchRating(newRate);
  // handle search
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      <BrowserRouter>
      <Search
        searchRating={searchRating}
        searchValue={searchValue}
        handleRating={handleRating}
        handleSearch={handleSearch}
        />
        <Switch>
<Route exact path="/" render={()=>
      <MovieList
      movies={movies.filter(
        (movie) =>
        movie.name
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase().trim()) &&
        movie.rating >= searchRating
        )}
        />
      } 
      />
      <Route path="/film/:name" render={(props)=> <Moviedescreption  movies={movies} {...props} />   } />
      <AddMovie handleAdd={handleAdd} />
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
