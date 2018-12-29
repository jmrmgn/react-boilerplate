import React, { Component, Fragment } from 'react';
import Template from './Template';

class Templates extends Component {
   render() {
      return (
         <Fragment>
            <Template
               title="Test"
               body="Body Test"
            />
         </Fragment>
      )
   }
}

export default Templates;