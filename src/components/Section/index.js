import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Banner from '../../components/Banner/index';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import Information from '../../components/Information/index';
import License from '../../components/License/index';
import Sidenav from '../../components/Sidenav/index';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

// Different Markdown Code Styles
import { componentsDark, componentsLight } from '../../common/code';

export default function Section(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRefs = props.headers.map(() => React.createRef());

  // Handle Scrolling Functionality
  function handleObserver(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveIndex(entry.target.id.split('-')[1]);
      }
    });
  }

  // Add Scrolling Listener
  useEffect(() => {
    const options = { rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver(handleObserver, options);
    headerRefs.forEach((ref, idx) => {
      const element = document.querySelector('#header-' + idx);
      observer.observe(element);
    });
  }, []);

  // Scroll to Sidenav Header
  function scrollToRef(header) {
    const idx = props.headers.indexOf(header);
    const ref = headerRefs[idx];
    const distance = ref.current.getBoundingClientRect().bottom;
    window.scrollBy({ left: 0, top: distance - 112, behavior: 'smooth' });
    setActiveIndex(idx);
  }

  return (
    <Local.SectionMain>
      <Header
        theme={props.theme}
        toggleTheme={props.toggleTheme}
      />
      <Local.SectionInner>
        <Banner />
        <Local.SectionDisplay>
          <Sidenav>
            {(props.sections.map((section, idx1) => {
              return (
                <Local.SectionNavigation key={idx1}>
                  {(Object.keys(section).map((header, idx2) => {
                    return (
                      <Local.SectionHeader
                        key={idx2}
                        active={props.headers[activeIndex] === header}
                        onClick={scrollToRef.bind(this, header)}
                      >
                        {header}
                      </Local.SectionHeader>
                    );
                  }))}
                </Local.SectionNavigation>
              );
            }))}
          </Sidenav>
          <Local.SectionInformation>
            <Information location={props.location}>
              {(props.sections.map((section, idx1) => {
                return (
                  <Local.SectionBody key={idx1}>
                    {(Object.keys(section).map((header, idx2) => {
                      return (
                        <Local.SectionText id={'header-' + props.headers.indexOf(header)} key={idx2}>
                          <Local.SectionTitle ref={headerRefs[props.headers.indexOf(header)]}>
                            <Global.Header3>
                              {header}
                            </Global.Header3>
                          </Local.SectionTitle>
                          <Global.Body>
                            {(props.theme === 'light') ? (
                              <ReactMarkdown components={componentsLight}>
                                {section[header]}
                              </ReactMarkdown>
                            ) : (
                              <ReactMarkdown components={componentsDark}>
                                {section[header]}
                              </ReactMarkdown>
                            )}
                          </Global.Body>
                        </Local.SectionText>
                      );
                    }))}
                  </Local.SectionBody>
                );
              }))}
            </Information>
            <License />
            <Footer />
          </Local.SectionInformation>
        </Local.SectionDisplay>
      </Local.SectionInner>
    </Local.SectionMain>
  );
}
