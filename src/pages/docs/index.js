import React from 'react';
import { CardExternal } from '../../components/Card/index';

// Main Components
import Banner from '../../components/Banner/index';
import Building from '../../components/Building/index';
import Divider from '../../components/Divider/index';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import Horizontal from '../../components/Horizontal/index';
import Landing from '../../components/Landing/index';
import Module from '../../components/Module/index';
import Starting from '../../components/Starting/index';

// Main Styles
import { Global } from '../../styles';

const news = `
Check out our Medium and Twitter for the major milestones we've hit recently as well as
updates on our current projects.
`;

const community = `
Become an active member of the community by joining in the conversation at any of the links
below.
`;

function MainSection(props) {
  return (
    <React.Fragment>
      <Landing theme={props.theme} />
      <Divider theme={props.theme} />
      <Divider
        theme={props.theme}
        rotation
      />
    </React.Fragment>
  )
}

function SecondarySection(props) {
  return (
    <React.Fragment>
      <Building />
      <Horizontal />
      <Module
        title={"News & Announcements"}
        text={news}
      >
        <CardExternal
          link={'https://www.medium.com/@blinkhash'}
          text={'Medium'}
        />
        <CardExternal
          link={'https://twitter.com/blinkhash1'}
          text={'Twitter'}
        />
      </Module>
      <Horizontal />
      <Module
        title={"Join the Community"}
        text={community}
      >
        <CardExternal
          link={'https://github.com/blinkhash'}
          text={'Github'}
        />
        <CardExternal
          link={'https://bitcointalk.org/index.php?topic=5333858.0'}
          text={'Bitcointalk'}
        />
        <CardExternal
          link={'https://discord.gg/8xtHZFKJQY'}
          text={'Discord'}
        />
      </Module>
      <Divider theme={props.theme} gray />
      <Starting theme={props.theme} />
    </React.Fragment>
  )
}

export default function Index(props) {
  return (
    <React.Fragment>
      <Global />
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Banner
        component={"blinkhash"}
        pages={['/overview', '/foundation']}
      />
      <MainSection theme={props.theme} />
      <SecondarySection theme={props.theme} />
      <Footer />
    </React.Fragment>
  );
}
