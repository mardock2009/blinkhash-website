import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/* eslint-disable arrow-body-style */
function ScrollToTop(props) {
  useEffect(() => {
    props.history.listen(() => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    });
  }, [props.history]);
  return null;
}

export default withRouter(ScrollToTop);
