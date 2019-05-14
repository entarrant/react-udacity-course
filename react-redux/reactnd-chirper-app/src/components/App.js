import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "../components/Dashboard";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : <Dashboard />}
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  };
}

export default connect(mapStateToProps)(App);
