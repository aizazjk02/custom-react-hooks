import { useEffect, useState } from "react";

const useWindowSize = () => {
  // store window size
  const [windowSize, setWindowSize] = useState(1920);
  // function to get the window size
  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };
  // event listner to grab window size
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // return window size
  return windowSize
};

const ExampleComponentWindowSize = () => {
    const windowSize = useWindowSize()
    return <div>
        currentWidth: {windowSize}
    </div>
}

export default ExampleComponentWindowSize
