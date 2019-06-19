
import React,{Component} from 'react';

class AppLayout extends Component{
  render(){
    return (<div>
      <h3>Welcome to testapp</h3>
      <div>{this.props.children}</div>
    </div>);
  }
}

export default AppLayout;