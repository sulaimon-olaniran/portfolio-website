import {useState, useEffect} from "react";

const PageLoaderComponent = () => {
  const [drawLine, setDrawLine] = useState(false);
  const [load, setLoad] = useState(false);

  setTimeout(() => {
    setDrawLine(true);
  }, 1000);

  setTimeout(() => {
    setLoad(true);
  }, 2000);

  return (
    <div
      className={`page-loader-component-container ${load && "load-page"} ${
        drawLine && "draw-diagonal-line"
      }`}
    >
      <div className="diagonal-line"></div>
      <div className="triangle left-sided"></div>
      <div className="triangle right-sided"></div>
    </div>
  );
};

export default PageLoaderComponent;
