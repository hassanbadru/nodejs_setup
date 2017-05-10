import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

const App = (props) => {
  return (
    <div>
      <h2 className = 'text-center'>
          {props.headerMessage}
      </h2>
      <div></div>
    </div>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string
};

App.defaultProps = {
  headerMessage: 'Hello'
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
