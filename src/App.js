import React from 'react';
// import { ActionButton } from '@patternfly/react-component-groups';
import { ErrorState } from '@patternfly/react-component-groups';

// require('react-dom');
// window.React2 = require('react');
// console.log('window.React1', window.React1);
// console.log('window.React2', window.React2);
// console.log('window.React1 === window.React2', window.React1 === window.React2);

const Test = () => (
  // <ActionButton
  //   children='Primary action'
  //   // eslint-disable-next-line no-console
  //   onClick={() => {console.log('Primary action clicked')}}
  // />
  <ErrorState errorTitle="test" />
);

function App() {
  return (
    <>
      <Test />
      <div>test</div>
    </>
  );
}

export default App;
