import Calculator from "../calculator/Calculator.jsx"
import './App.css';
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div>
      <div class="header">
        <h1 id="title">Estimated Pay Calculator</h1>
      </div>
      <Calculator />
      <Footer />
    </div>
  )
}

export default App;
