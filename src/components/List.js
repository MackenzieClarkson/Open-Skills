import React, { Component } from 'react';

class List extends Component{
  constructor(props) {
    super(props);
    this.state={
      updateKey: props.updateKey,
      list: props.list,
      title: props.title,
      listKey: props.listKey,
      methodKey: props.methodKey,
      subtitle: props.subtitle
    }

  }
render(){
  return (
    <React.Fragment key={this.props.updateKey}>
    <h3>
      {this.props.title}
    </h3>
    <h4>
      {this.props.subtitle}
    </h4>
    <p>
      <ul>
        {
          this.props.list.map((item) =>
          <li
          value={item[this.props.listKey]}
          className='link'
          onClick={() => this.props.getMethod(item[this.props.methodKey])}>
            {item[this.props.listKey]}
          </li>)
        }
      </ul>
    </p>
    </React.Fragment>
  )}
}
export default List;
