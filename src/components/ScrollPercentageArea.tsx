import React, { useState } from "react";
import getScrollPercent from "../lib/scrollPercentage";
import "./ScrollPercentageArea.sass";

export type ScrollPercentageAreaProps = {
  id: string;
  height: string;
  children: any;
};

function ScrollPercentageArea(props: ScrollPercentageAreaProps) {
  const [state, setState] = useState(0);

  function scrollHandler() {
    let percentage = getScrollPercent(props.id);
    setState(percentage);
  }

  return (
    <div
      id={props.id}
      onScroll={scrollHandler}
      style={{
        maxHeight: props.height,
        height: props.height
      }}
      className="scroll-percentage-area"
    >
      <div
        style={{
          width: `${state}%`
        }}
        className="scroll-percentage-bar"
      />
      {props.children}
    </div>
  );
}

export default ScrollPercentageArea;
