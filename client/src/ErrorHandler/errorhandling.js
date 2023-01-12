import React from "react";

import ComponentError from "./componentError";
import PageError from "./errorFallback";

export class ErrorBoundary extends React.Component{

    state = {hasError: false};

    componentDidCatch(error) {
      // report the error to your favorite Error Tracking tool (ex: Sentry, Bugsnag)
      console.error(error);
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
  
    render() {
        if (this.state.hasError) {
          if(this.props.type === "component"){
            return <ComponentError /> ;
          }
          else{
            return <PageError /> ;
          }
          }
      return this.props.children;
    }
  }
  

  export default ErrorBoundary;
