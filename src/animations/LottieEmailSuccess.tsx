import Lottie from 'react-lottie';
import * as animationData from './email.json';

const LottieEmailSuccess = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie height={200} width={200} options={defaultOptions} />;
};

export default LottieEmailSuccess;