import './App.css'
import HomePage from "./components/home_page/HomePage";
import ErrorBoundary from "./components/layouts/error_boundary/ErrorBoundary";

function App() {
  return (

    <div className="App">
        <ErrorBoundary>
            <HomePage/>
        </ErrorBoundary>
    </div>
  );
}

export default App;
