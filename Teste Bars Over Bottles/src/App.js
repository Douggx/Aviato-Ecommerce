import GlobalState from './Global/GlobalState';
import Router from './Routes/Router';
import './Sass/_app.scss'

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
