import Header from "./components/layouts/Header";
import './styles/Layouts.css'
import './styles/Errors.css'
import Footer from "./components/layouts/Footer";
import CreateElement404 from "./components/errors/CreateElement404";
import Component404 from "./components/errors/Component404";
import Functional404 from "./components/errors/Functional404";
import PureComponent404 from "./components/errors/PureComponent404";

function App() {
  return (

    <div className="App">
        <Header/>
        {/*<CreateElement404/>*/}
        <Component404/>
        {/*<PureComponent404/>*/}
        {/*<Functional404/>*/}
        <Footer/>
    </div>
  );
}

export default App;
