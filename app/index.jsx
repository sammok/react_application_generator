import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('appContainer')
  )
}

render(Routes);

if (module.hot) module.hot.accept('./routes/Routes', () => render(Routes));
