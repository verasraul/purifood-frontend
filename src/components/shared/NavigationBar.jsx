import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBowlRice} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <header className="header-container">
      <span className='icon'><FontAwesomeIcon icon={faBowlRice}/>PuriFood</span>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">My Recipes</NavLink>
      <NavLink to="/recipes/create-recipe">Create New Recipe</NavLink>
    </header>
  );
}

export default NavigationBar;
