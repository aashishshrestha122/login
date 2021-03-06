/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoginContainer from 'containers/LoginContainer/Loadable';
import Dash from 'containers/Dash/';
import Testimonial from 'containers/Dash/Components/Testimonial';
import Gettestimonial from 'containers/Dash/Components/Gettestimonial';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  const token = localStorage.getItem('token');
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route
          path="/dash"
          render={() => (token ? <Dash /> : <Redirect to="/" />)}
        />
        <Route
          path="/testimonial"
          render={props =>
            token ? <Testimonial {...props} /> : <Redirect to="/" />
          }
        />
        /
        <Route
          path="/listtestimonials"
          render={props =>
            token ? <Gettestimonial {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/edit-testimonial/:test_id"
          render={props =>
            token ? <Testimonial {...props} /> : <Redirect to="/" />
          }
        />{' '}
        <Route
          path="/delete-testimonial/:test_id"
          render={props =>
            token ? <Testimonial {...props} /> : <Redirect to="/" />
          }
        />
        
        <Route path="/" component={LoginContainer} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
