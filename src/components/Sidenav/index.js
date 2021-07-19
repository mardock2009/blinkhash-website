/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import * as Local from './styles';

export default function Sidenav(props) {
  const [offset, setOffset] = useState(164);
  const heightRef = useRef(null);

  function calculateOffset() {
    if (heightRef.current) {
      const sidenavDimensions = heightRef.current.getBoundingClientRect();
      setOffset(sidenavDimensions.top)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', calculateOffset);
  }, [])

  return (
    <Local.SidenavMain
      ref={heightRef}
      style={{
        height: `calc(100vh - ${offset}px)`,
        maxHeight: `calc(100vh - ${offset}px)`
      }}
    >
      <Local.SidenavInner>
        {props.children}
      </Local.SidenavInner>
    </Local.SidenavMain>
  );
}
