import Lottie from 'react-lottie';
import * as animationData from './emailError.json';

const LottieEmailError = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie height={80} width={80} options={defaultOptions} />;
};

export default LottieEmailError;