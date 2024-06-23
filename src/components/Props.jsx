import React from 'react'
import Props1 from './Props1'

const Props = (props) => {
  return (
    <div>
      <p>
        {props.firstName}
        {props.lastName}
      </p>
      <Props1 firstName={props.firstName} lastName={props.lastName}></Props1>
    </div>
  );
}

export default Props
