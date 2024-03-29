import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import NotFoundPage from "./Pages/NotFoundPage";
//import ProductContext from "./context/ProductContext";
//import CartProvider from "./context/CartContext";
import Layout from "./layouts/Layout";

function App() {
  return (
    //<CartProvider>
      //<ProductContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      //</ProductContext>
   //</CartProvider>
  );
}

export default App;
