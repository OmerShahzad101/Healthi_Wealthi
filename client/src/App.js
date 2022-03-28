import MyRouts from "./routers/routes";
import { Provider } from 'react-redux'
import store from './redux/store'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyRouts />
      </div>
    </Provider>
  );
}

export default App;
