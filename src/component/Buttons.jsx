import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { changeColor } from "../Redux/action";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
  bg1: {
    margin: "10px",
    backgroundColor: "#F3F2FC",
    color: "black",
  },
  bg2: { margin: "10px", backgroundColor: "#5E4FDB", color: "white" },
  bg3: { margin: "10px", backgroundColor: "#1ABC9C", color: "white" },
  bg4: { margin: "10px", backgroundColor: "#D64B4B", color: "white" },
  bg5: {
    margin: "10px",
    borderColor: "#F3F2FC",
    color: "#F3F2FC",
  },
  bg6: { margin: "10px", borderColor: "#5E4FDB", color: "#5E4FDB" },
  bg7: { margin: "10px", borderColor: "#D64B4B", color: "#D64B4B" },

  bg8: { margin: "10px", borderColor: "#1ABC9C", color: "#1ABC9C" },
  min_button: {
    padding: "4px",
    minWidth: "20px",
    height: "20px",
  },
});
function Buttons() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        className={classes.bg2}
        onClick={() => {
          dispatch(changeColor("#5E4FDB"));
        }}
      >
        Button
      </Button>
      <Button
        variant="contained"
        className={classes.bg1}
        onClick={() => {
          dispatch(changeColor("#F3F2FC"));
        }}
      >
        Button
      </Button>
      <Button
        variant="contained"
        className={classes.bg3}
        onClick={() => {
          dispatch(changeColor("#1ABC9C"));
        }}
      >
        Button
      </Button>
      <Button
        variant="contained"
        className={classes.bg4}
        onClick={() => {
          dispatch(changeColor("#D64B4B"));
        }}
      >
        Button
      </Button>
      <br />
      <br />
      <Button variant="outlined" className={classes.bg6}>
        Button
      </Button>
      <Button variant="outlined" className={classes.bg5}>
        Button
      </Button>
      <Button variant="outlined" className={classes.bg8}>
        Button
      </Button>
      <Button variant="outlined" className={classes.bg7}>
        Button
      </Button>
      <br />
      <br />
      <Button variant="text" className={classes.bg6}>
        Button
      </Button>
      <Button variant="text" className={classes.bg5}>
        Button
      </Button>
      <Button variant="text" className={classes.bg8}>
        Button
      </Button>
      <Button variant="text" className={classes.bg7}>
        Button
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        className={`${classes.bg7} ${classes.min_button}`}
      >
        -
      </Button>
      <Button
        variant="outlined"
        className={`${classes.bg6} ${classes.min_button}`}
      >
        +
      </Button>
      <Button
        variant="outlined"
        className={`${classes.bg5} ${classes.min_button}`}
      ></Button>
      <Button
        variant="contained"
        className={`${classes.bg2} ${classes.min_button}`}
      >
        +
      </Button>
      <Button
        variant="contained"
        className={`${classes.bg4} ${classes.min_button}`}
      >
        -
      </Button>
      <Button
        variant="contained"
        className={`${classes.bg3} ${classes.min_button}`}
      >
        +
      </Button>
    </>
  );
}

export default Buttons;
