import { FallingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const AnimatedLoader = () => {
  return (
    <LoaderContainer>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderContainer>
  );
};

export default AnimatedLoader;
