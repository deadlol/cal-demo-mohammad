import { useDispatch } from "react-redux";
import { displayStateActions } from "./store/states";

export default function Button({ id, classes, val, children, ...props }) {
  const dispatch = useDispatch();

  function clickHandler(e) {
    dispatch(displayStateActions.changer(e.target.innerText));
  }
  return (
    <button
      id={id}
      type="button"
      className={classes}
      value={val}
      onClick={(event) => clickHandler(event)}
      {...props}
    >
      {children}
    </button>
  );
}
