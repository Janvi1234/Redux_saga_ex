import React from "react";
import { Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "70px",
    height: "28px",
    padding: "0px"
  },
  switchBase: {
    color: "#D64B4B",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#1ABC9C"
      }
    }
  },
  thumb: {
    color: "white",
    width: "10px",
    height: "10px",
    margin: "7px"
  },
  track: {
    borderRadius: "20px",
    backgroundColor: "#D64B4B",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px"
    },
  },
  checked: {
    color: "#1ABC9C !important",
    transform: "translateX(45px) !important"
  }
});

export default function Switches() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
