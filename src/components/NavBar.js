import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";


function NavBar({switchTheme, isOn, theme, isLight}) {
  const [click, setClick] = useState(false);
  const [expanded, setExpanded] = useState('');
  const [externalLink, setExternalLink] = useState('');
  
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  const handleExternalLink = (link) => {
    setExternalLink(link);
    setExpanded(false);
  };

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>CC 1</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/TP1"
                activeClassName="active"
                className="nav-links"
                onClick={()=>
                  handleExternalLink('https://fatimazahraetassouliaddad.github.io/TP1_react/')
                }
              >
                Calcuatrice
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/TP2"
                activeClassName="active"
                className="nav-links"
                onClick={()=>
                  handleExternalLink('https://fatimazahraetassouliaddad.github.io/TP2_react/')
                }
              >
                Slider

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/TP3"
                activeClassName="active"
                className="nav-links"
                onClick={()=>
                  handleExternalLink('https://fatimazahraetassouliaddad.github.io/tp3_react/')
                }

              >
                Todo-List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/TP4"
                activeClassName="active"
                className="nav-links"
                onClick={()=>
                  handleExternalLink('https://fatimazahraetassouliaddad.github.io/tp4_react/')
                }

              >
                IPI
              </NavLink>
            </li>
            
            
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
      <div className="content-container">
            {externalLink && (
            <iframe
                src={externalLink}
                title="External Content"
                style={{ width: '100%', height: '80vh' }}
            />
            )}
      </div>
        
    </>
    
  );
}

export default NavBar;
