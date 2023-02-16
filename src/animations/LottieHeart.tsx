import Lottie from 'react-lottie';
import * as animationData from './heart.json';

const LottieHeart = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie height={40} width={40} options={defaultOptions} />;
};

export default LottieHeart;