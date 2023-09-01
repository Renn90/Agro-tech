import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import ServicePage from "./Pages/ServicePage";
import Store from "./Pages/Store";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import ProductDetail from "./Pages/ProductDetail";
import { CartReducer } from "./components/Store/cartReducer";
import Cart from "./Pages/Cart";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <ServicePage /> },
        {
          path: "store",
          element: <Store />,
        },
        { path: "/store/:productId", element: <ProductDetail /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <ContactPage /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return (
      <CartReducer>
        <RouterProvider router={routes} />
      </CartReducer>
  );
}

export default App;
