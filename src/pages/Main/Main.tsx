import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const pages: Array<string> = [
    "Grid",
    "Responsive",
    "Hamburger",
    "Pomodoro",
    "PassProps",
    "Destructuring",
    "ReduxCounter",
    "UseStateComp",
  ];
  return (
    <div className='buttonContainer'>
      {pages.map((i) => {
        return (
          <button className='button '>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to={i}
            >
              {i}
            </Link>
          </button>
        );
      })}
    </div>
  );
};

export default Main;
