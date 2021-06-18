import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { LinkInternal } from '../Links';

// Main Styles
import * as Global from '../../styles';
import * as Local from './styles';

function Banner(props) {
  const [page, updatePage] = useState('');

  useEffect(() => {
    updatePage(props.history.location.pathname);
  }, [props.history]);

  return (
    <Local.BannerMain>
      <Local.BannerInner>
        <Local.BannerTitle>
          <Global.Header3>{'Blinkhash Core v1'}</Global.Header3>
        </Local.BannerTitle>
        <Local.BannerSelect>
          <LinkInternal link={'/overview'}>
            <Local.BannerSelectItem active={['/', '/overview'].includes(page)}>
              <Global.Header4>{'Overview'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/tutorials'}>
            <Local.BannerSelectItem active={['/tutorials'].includes(page)}>
              <Global.Header4>{'Tutorials'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/endpoints'}>
            <Local.BannerSelectItem active={['/endpoints'].includes(page)}>
              <Global.Header4>{'Endpoints'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
          <LinkInternal link={'/questions'}>
            <Local.BannerSelectItem active={['/questions'].includes(page)}>
              <Global.Header4>{'FAQs'}</Global.Header4>
            </Local.BannerSelectItem>
          </LinkInternal>
        </Local.BannerSelect>
      </Local.BannerInner>
    </Local.BannerMain>
  );
}

export default withRouter(Banner);
