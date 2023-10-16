import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <span>
      <RotatingLines
        strokeColor="lime"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </span>
  );
};
