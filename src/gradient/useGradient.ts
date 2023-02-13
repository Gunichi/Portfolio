import { useEffect, useState } from "react";
import { generateGradientRangeArray, randNumInRange } from "./helpers";
import { GradientType, IResult } from "./types";

const GRADIENT_API =
  "https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json";

const useGradient = () => {
  const [gradients, setGradients] = useState<GradientType>();

  useEffect(() => {
    const getData = async (url: string): Promise<void> => {
      // get the data from the api
      const response = await fetch(url);
      const result = (await response.json()) as IResult;
      // Get single gradient from data pulled in array and
      // apply single gradient to a callback function
      const gradient = result.data[randNumInRange(result.data.length)];
      const transform = generateGradientRangeArray(gradient);
      // set state with the result
      setGradients(transform);
    };
    // Catching errors
    getData(GRADIENT_API).catch(console.error);
  }, []);

  return gradients;
};

export default useGradient;
