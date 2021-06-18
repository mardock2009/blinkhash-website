import React from "react";
import { connect } from 'react-redux';
import './index.css';

import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';

const mapState = () => ({});
const mapDispatch = {};

const connector = connect(mapState, mapDispatch);
function Index() {
  return (
    <div className="index-main">
      <Header />
      <Footer />
    </div>
  )
}

export default connector(Index);
