import { useDispatch } from "react-redux";
import Button from "./Button";
import { displayStateActions } from "./store/states";

export default function Buttons() {
  const dispatch = useDispatch();
  function acHandler() {
    dispatch(displayStateActions.resetDisplay());
  }
  return (
    <>
      <Button id="add" classes="btn btn-info" value="+">
        +
      </Button>
      <Button id="subtract" classes="btn btn-info" value="-">
        -
      </Button>
      <Button id="miltiply" classes="btn btn-info" value="*">
        *
      </Button>
      <Button id="divide" classes="btn btn-info" value="/">
        /
      </Button>
      <Button id="seven" classes="btn btn-light waves-effect" value="7">
        7
      </Button>
      <Button id="eight" classes="btn btn-light waves-effect" value="8">
        8
      </Button>
      <Button id="nine" classes="btn btn-light waves-effect" value="9">
        9
      </Button>
      <Button id="four" classes="btn btn-light waves-effect" value="4">
        4
      </Button>
      <Button id="five" classes="btn btn-light waves-effect" value="5">
        5
      </Button>
      <Button id="six" classes="btn btn-light waves-effect" value="6">
        6
      </Button>
      <Button id="one" classes="btn btn-light waves-effect" value="1">
        1
      </Button>
      <Button id="two" classes="btn btn-light waves-effect" value="2">
        2
      </Button>
      <Button id="three" classes="btn btn-light waves-effect" value="3">
        3
      </Button>
      <Button id="zero" classes="btn btn-light waves-effect" value="0">
        0
      </Button>
      <Button id="decimal" classes="btn btn-secondary" value=".">
        .
      </Button>
      <Button
        id="clear"
        classes="btn btn-danger btn-sm"
        value="AC"
        onClick={acHandler}
      >
        AC
      </Button>
      <Button id="equals" classes="btn btn-default" value="=">
        =
      </Button>
    </>
  );
}
