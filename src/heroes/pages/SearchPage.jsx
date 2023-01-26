import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks";
import { HeroCard  } from "../components";
import { getHeroesByName } from "../helpers";
import { Alert } from "../../ui/components";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log({location});

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0) ;
  const showError = (q.length > 0) && heroes.length === 0;

  const typeAlert = (q.length === 0) ? 'alert-primary' : (q.length > 0) && heroes.length === 0 ? 'alert-danger' : '';


  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSubmitSearch = (event) => {
    event.preventDefault()

    //if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase()}`)

    console.log({searchText});
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSubmitSearch}>
            <input type="text" placeholder="Search a hero" 
              name="searchText" 
              id="searchText" 
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={ onInputChange } />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <Alert message="Search a hero" type={typeAlert} style={{ display: showSearch ? '' : 'none' }}  />
          <Alert message={`No hero with ${q}`} type={typeAlert} style={{ display: showError ? '' : 'none' }}  />

          {
            heroes.map( hero => {
              return <HeroCard key={hero.id} {...hero} />
            })
          }

        </div>

      </div>


    </>
  )
}
