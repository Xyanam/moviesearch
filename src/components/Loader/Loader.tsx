import classes from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={classes.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
