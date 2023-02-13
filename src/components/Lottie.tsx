import Lottie from 'react-lottie';
import * as animationData from '../animations/scrollDown.json';

const LottiePlayer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export default LottiePlayer;