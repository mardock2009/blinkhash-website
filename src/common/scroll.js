import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/* eslint-disable arrow-body-style */
function ScrollToTop(props) {
  useEffect(() => {
    return (() => {
      props.history.listen(() => {
        window.scrollTo(0, 0);
      });
    });
  }, [props.history]);
  return null;
}

export default withRouter(ScrollToTop);
