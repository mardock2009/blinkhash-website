/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Main Components
import Banner from '../../docs/Banner/index';
import Footer from '../../common/Footer/index';
import License from '../../docs/License/index';
import Resources from '../../docs/Resources/index';
import Sidenav from '../../docs/Sidenav/index';

// Main Styles
import * as Global from '../../../styles';
import * as Local from './styles';

// Different Markdown Code Styles
import { componentsDark, componentsLight } from '../../../common/code';

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
    window.scrollBy({ left: 0, top: distance - 102, behavior: 'smooth' });
    setActiveIndex(idx);
  }

  return (
    <Local.SectionContainer>
      <Local.SectionInner>
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
          <Local.SectionMain>
            <Local.SectionMainContainer>
              <Local.SectionMainInner>
                <Local.SectionDocumentation>
                  <Banner />
                  <Local.SectionDocumentationInner>
                    {(props.sections.map((section, idx1) => {
                      return (
                        <Local.SectionBody key={idx1}>
                          {(Object.keys(section).map((header, idx2) => {
                            return (
                              <Local.SectionText id={'header-' + props.headers.indexOf(header)} key={idx2}>
                                <Local.SectionTitle ref={headerRefs[props.headers.indexOf(header)]}>
                                  {header}
                                </Local.SectionTitle>
                                <Global.Body2>
                                  {(props.theme === 'light') ? (
                                    <ReactMarkdown components={componentsLight}>
                                      {section[header]}
                                    </ReactMarkdown>
                                  ) : (
                                    <ReactMarkdown components={componentsDark}>
                                      {section[header]}
                                    </ReactMarkdown>
                                  )}
                                </Global.Body2>
                              </Local.SectionText>
                            );
                          }))}
                        </Local.SectionBody>
                      );
                    }))}
                  </Local.SectionDocumentationInner>
                </Local.SectionDocumentation>
                <License />
              </Local.SectionMainInner>
            </Local.SectionMainContainer>
          </Local.SectionMain>
          <Resources resources={props.resources} />
        </Local.SectionDisplay>
      </Local.SectionInner>
      <Footer />
    </Local.SectionContainer>
  );
}
