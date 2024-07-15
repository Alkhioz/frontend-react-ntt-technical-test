import { BrowserRouter } from "react-router-dom";
import { FinancialProductRoute } from "./financialProducts/financialProduct.route";

function App() {
  return (
    <BrowserRouter>
      <FinancialProductRoute />
    </BrowserRouter>
  )
}

export default App
