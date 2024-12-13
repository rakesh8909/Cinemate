import { AllRoutes } from "./routes/allRoutes";
import "./App.css";
import { Header, Footer } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
