import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import './index.css';

export default function Index(props) {
  return (
    <div className="index-main">
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Footer />
    </div>
  );
}
