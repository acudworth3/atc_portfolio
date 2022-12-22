import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  modifyNestedObj,
  modifyNestedObjWoTypes,
} from "./counterSlice";
import styles from "./Counter.module.css";
import { Box, Typography } from "@mui/material";

export function Counter() {
  const count = useAppSelector(selectCount);
  const { nestObj } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  // aslo
  // const [displayObj, setdisplayObj] = useState(
  //   useAppSelector((state) => state.counter.nestObj)
  // );

  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    console.log(nestObj);
  }, [nestObj]);

  return (
    <>
      <div>
        <Box className={styles.row}>
          <Typography>Redux State Object: </Typography>
          <br />
          <code>{JSON.stringify(nestObj)}</code>
        </Box>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                modifyNestedObj({ bool1: false, bool2: false, bool3: false })
              )
            }
          >
            Demo Reset State
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(modifyNestedObj({ bool1: true }))}
          >
            Demo Generic reducer
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(modifyNestedObjWoTypes({ bool2: true }))}
          >
            Demo Generic reducer untyped
          </button>
        </div>
      </div>
    </>
  );
}
