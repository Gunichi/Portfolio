import Lottie from 'react-lottie';
import * as animationData from './loading.json';

const LottieLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie 
    width={400}
    height={300}
    options={defaultOptions} />;
};

export default LottieLoading;