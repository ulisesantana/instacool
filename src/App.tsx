import React, {FunctionComponent} from 'react';
import styled, {IStyledComponent} from "./theme/styled-components";
import NavMenu from "./components/organisms/NavMenu";
import {Route, RouteProps, withRouter} from "react-router";
import {Login} from "./components/molecules/Login";
import {SignUp} from "./components/molecules/SignUp";
import {NewsFeed} from "./components/organisms/NewsFeed";
import {AppStore} from "./store";
import {connect} from "react-redux";

const AppWireframe: FunctionComponent<RouteProps & IStyledComponent> = ({className}) => (
  <div className={className}>
    <NavMenu/>
    <main>
      <Route exact path={`/`} component={Login}/>
      <Route exact path={`/register`} component={SignUp}/>
      <Route exact path={`/app/newsfeed`} component={NewsFeed}/>
    </main>
  </div>
);

export const App = styled(AppWireframe)`
  background: linear-gradient(${({theme}) => ['to bottom', theme.primaryColor, theme.secondaryColor].join(', ')});
  display: grid;
  font-family: 'Open Sans', sans-serif;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1.9fr;
  grid-template-areas: "menu" "main";
  height: ${window.innerHeight}px;
  overflow: auto;
  
  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    height: ${window.innerHeight}px;
    justify-content: center;
    padding: 8px;
  }

  a {
    color: #FF5500;
    font-weight: bold;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  @media screen and (max-width: 420px) {
    grid-template-areas: 'main' 'menu';
    main {
      margin-bottom: 5%;
      padding: 0;
    }
  }
  
`;

const mapStateToProps = ({form}: AppStore) => ({form});

export default withRouter(connect(mapStateToProps)(App));
