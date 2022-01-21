import ReactDOM from 'react-dom';
import classes from './LoadingScreen.module.css';

const LoadingOverlay = (props) => {
  return (
    <div className={classes.overlay}>
      <p>Loading...</p>
    </div>
  )
}

const portalElement = document.getElementById('loading');

const LoadingScreen = () => {
  return (
    <>
      {ReactDOM.createPortal(<LoadingOverlay />, portalElement)}
    </>
  )
}

export default LoadingScreen;