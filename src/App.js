import "./App.css";

import * as Icon from "react-feather";
import { Body } from "./Components/body/body";
import { About } from "./Components/about/about";
import { useTheme } from "./Components/theme/theme";
function App() {
  const { theme, setTheme } = useTheme();
  const handleThemeClick = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="App">
      <div id="sticky" className="nav-container">
        <p className="nav-brand">L.S Portfolio</p>
        <div className="nav-items">
          <ul>
            <li className="about">
              <a className="icons">
                {" "}
                <Icon.Home /> About me
              </a>
            </li>
            <li className="contact">
              <a className="icons">
                {" "}
                <Icon.Send /> Contacts
              </a>
            </li>
            <li className="theme-icon">
              {theme === "light" ? (
                <Icon.Moon onClick={handleThemeClick}></Icon.Moon>
              ) : (
                <Icon.Sun onClick={handleThemeClick} />
              )}
            </li>
          </ul>
        </div>
      </div>
      <Body />
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
