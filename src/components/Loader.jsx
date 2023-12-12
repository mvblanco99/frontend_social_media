import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <>
      <div style={
        {
          width:'100%', 
          background:'#fff'
        }}>
        <CircularProgress />
      </div>
    </>
  );
};

export default Loader;