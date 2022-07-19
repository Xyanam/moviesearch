import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={classes.container}>
      <span className={classes.emoji}>&#128533;</span>
      <h1>Увы, такой страницы на нашем сайте нету!</h1>
      <Link to="/" className={classes.btn}>
        Вернуться к поиску
      </Link>
    </div>
  );
};
export default NotFound;
