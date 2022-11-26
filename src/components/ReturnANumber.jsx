import React from "react";

function ReturnANumber(props) {
  const { numberFromProps } = props;
  return <div>{numberFromProps}</div>;
}

export default ReturnANumber;
