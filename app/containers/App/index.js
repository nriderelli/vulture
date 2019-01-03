/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
// import npm packages
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

// import local files
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Routes from 'containers/Routes';
import GlobalStyle from '../../global-styles';


export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Tribeca Advisor"
        defaultTitle="Tribeca Advisor"
      >
        <meta name="description" content="An Portal for Tribeca Advisor" />
      </Helmet>
      {/*
        App level Snackbar for error, success and general notifications
        */}
      {/* <SnackbarAlert /> */}
      <Switch>
        <Route exact path="/sign-up" component={NotFoundPage} />
         <Route path="/" component={Routes} /> 
      </Switch>
      <GlobalStyle />
    </div>
  );
}
