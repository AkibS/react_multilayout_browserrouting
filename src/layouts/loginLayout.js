
import React from 'react'

class LoginLayout extends React.Component{
  render(){
    return (<div>
      <h3>Test APP</h3>
      <div>{this.props.children}</div>
    </div>);
  }
}

export default LoginLayout;