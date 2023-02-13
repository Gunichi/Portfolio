import Lottie from 'react-lottie';
import * as animationData from './coffee.json';

const LottieCoffee = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie height={100} width={100} options={defaultOptions} />;
};

export default LottieCoffee;