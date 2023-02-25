import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundaries extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true }; // whenever catches error, call his function.
  }
  componentDidCatch(error, info) {
    console.log("error boundary caught an error", error, info); // send to error service .... tackjs
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          there was an error, go back... <Link to="/">home</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
