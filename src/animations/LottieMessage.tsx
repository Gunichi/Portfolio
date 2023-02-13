import Lottie from 'react-lottie';
import * as animationData from './message.json';

const LottieMessage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie height={60} width={60} options={defaultOptions} />;
};

export default LottieMessage;