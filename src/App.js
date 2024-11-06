import { FormProvider } from "./context/FormContext";
import Home from "./pages/Home";
import "./styles/service.css";
import "./styles/contact.css";
import "./styles/multiform.css";
import "./styles/review.css";
function App() {
  return (
    <FormProvider>
      <div className="App">
        <Home />
      </div>
    </FormProvider>
  );
}

export default App;
