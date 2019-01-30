import React from 'react';
import { BrowserRouter as Router, Link  } from 'react-router-dom';

const Button = (props) => {
  const type = props.type === 'outline' ? `${props.type}-` : '';
  return <Link to={props.link} className={`btn btn-${ type }primary`}><i className="fa fa-html5"></i>{props.text}</Link>
}
export default Button