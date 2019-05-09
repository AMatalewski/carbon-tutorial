import React, { Component } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

class TutorialHeader extends Component {
  render() {
    return (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderName href="/" prefix="IBM">
          Carbon Tutorial
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/repos">Link 1</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    );
  }
}

export default TutorialHeader;