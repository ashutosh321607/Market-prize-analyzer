import * as React from "react";

export default function RowsGrid(props) {
  return (
    <div style={{ height: "120%", width: "100%" }}>
      <b>Current Price</b> : {props.current_price}
      <br />
      <b>Expected Price(in 3 days)</b> : {props.expected}({props.growth}%)<br />
    </div>
  );
}
