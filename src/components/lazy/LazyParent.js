import React, { Component, lazy, Suspense } from 'react';
const LazyComp = lazy(() => import('./LazyComp'));

class LazyParent extends Component {
   render() {
      return(
         <Suspense fallback={<div>Loading...</div>}>
            <LazyComp />
         </Suspense>
      );
   }
}

export default LazyParent;