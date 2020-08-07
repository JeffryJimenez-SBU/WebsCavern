import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//apollo-gql
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

//Components
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

//apollo setup
import { cache } from "./cache";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache,
  headers: {
    Authorization: localStorage.getItem("token") || "",
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Navbar />
          <section className='landing_zone'>
            <section className='container_body'>
              <Switch>
                <Route exact path='/Register' component={Register}></Route>
                <Route exact path='/Login' component={Login}></Route>
              </Switch>
            </section>
          </section>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
};

export default App;
