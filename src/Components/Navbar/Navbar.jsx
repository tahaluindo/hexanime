import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Search from '../Search/Search';
import Home from '../Home/Home';
import HomeManga from '../HomeManga/HomeManga';
import About from '../About/About';
import Timer from '../Timer/Timer';
import TrendingAnimeLists from '../TrendingAnimeLists/TrendingAnimeLists';


function Navbar(props){
    return (
        <Router>
            <div className="navbarContainer">
                <div className="navbar">

                    <div className="logo">
                        <h1>Hexanime</h1>
                        <Search />
                    </div>

                    <nav>
                        <ul>
                            <li><Link to="/">Anime</Link></li>
                            <li><Link to="/manga">Manga</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/timer">Timer</Link></li>
                            {/* <li className="hidden"><Link to="/trending-animes"></Link></li> */}
                        </ul>
                    </nav>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home show={props.show} />
                </Route>

                <Route path="/manga">
                    <HomeManga />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/timer">
                    <Timer />
                </Route>

                <Route path="/trending-animes">
                    <TrendingAnimeLists />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar;