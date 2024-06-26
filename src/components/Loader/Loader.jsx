import { FallingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const AnimatedLoader = () => {
  return (
    <LoaderContainer>
      <FallingLines
        color="#fff352"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderContainer>
  );
};

export default AnimatedLoader;
