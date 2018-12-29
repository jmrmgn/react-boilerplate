import React, { Fragment } from 'react';

const Template = (props) => {
   const { title, body } = props;
   return (
      <Fragment>
         <h1>{title}</h1>
         <h4>{body}</h4> 
      </Fragment>
   );
};

export default Template;