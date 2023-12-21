import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "../assets/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Header.css"

const Header = () => {
  return (
    <header className="position-absolute">
      <Navbar className="navbar-header z-3 navbar-expand-md fixed-top" expand="md">
        <div className="container p-header">
          <Navbar.Brand>
            <NavLink className="nav-link nav-item text-header" to="/">
              <img
                src="src\assets\images\logo1.png"
                alt="Logo site"
                width="150"
                height="48"
                className="logo"
              />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="menu" />

          <Navbar.Collapse id="menu" className="justify-content-between ">
            <Nav className="mr-auto">
{/* ------------------------------ FILME ------------------------------------------------------------------------- */}
              <NavDropdown title="Filmes" id="filme-dropdown">

              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Filmes

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="">
                  250 melhores filmes
                  </NavLink>
                </NavDropdown.Item>

              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Por Gênero

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                  Ação
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Aventura
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Terror
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Comédia
                  </NavLink>
                </NavDropdown.Item>
                
                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/vertudo">
                    Ver Tudo
                  </NavLink>
                </NavDropdown.Item>
                
              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Prêmios e Eventos
                
                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Óscar
                  </NavLink>
                </NavDropdown.Item>

              </NavDropdown>

{/* ------------------------------ SÉRIE ------------------------------------------------------------------------- */}
              <NavDropdown title="Séries" id="serie-dropdown">


              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Séries


                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                  250 melhores séries
                  </NavLink>
                </NavDropdown.Item>

              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Por Gênero


                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                  Ação
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Aventura
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Terror
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Comédia
                  </NavLink>
                </NavDropdown.Item>
                
                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/vertudo">
                    Ver Tudo
                  </NavLink>
                </NavDropdown.Item>
                

              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Prêmios e Eventos

                
                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Óscar
                  </NavLink>
                </NavDropdown.Item>
                </NavDropdown>
{/* ------------------------------ GAMES ------------------------------------------------------------------------- */}
              <NavDropdown title="Games" id="game-dropdown">

              <FontAwesomeIcon icon={faFilm} />
                        {"   "}GAMES


                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                  250 melhores games
                  </NavLink>
                </NavDropdown.Item>


              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Por Gênero


                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                  Ação
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Aventura
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Terror
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Comédia
                  </NavLink>
                </NavDropdown.Item>
                
                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/vertudo">
                    Ver Tudo
                  </NavLink>
                </NavDropdown.Item>
                

              <FontAwesomeIcon icon={faFilm} />
                        {"   "}Prêmios e Eventos


                <NavDropdown.Item className="dropdown-item">
                  <NavLink className="nav-link nav-item text-header" to="/item">
                    Game Awards
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="esq navbar-nav">
              <NavLink className="nav-link nav-item text-header" to="/item">
                Minha Lista
              </NavLink>
              <NavLink className="nav-link nav-item text-header" to="/item">
                <FontAwesomeIcon icon={faSignInAlt} />
                {"   "}Entrar
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
