import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, Home, Menu, OrderDetails, Payment, Login, Register, Dashboard } from "./pages";
import { ProductDetail, PrivateRoute } from "./components";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
// Import dashboard-related pages
import Products from "./pages/dashboard/Products";
import Users from "./pages/dashboard/Users";
import Offers from "./pages/dashboard/Offers";
import Gallery from "./pages/dashboard/Gallery";
import About from "./pages/dashboard/About";
import Terms from "./pages/dashboard/Terms";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Dashboard Routes */}
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/products" 
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/users" 
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/offers" 
            element={
              <PrivateRoute>
                <Offers />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <PrivateRoute>
                <Gallery />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/terms" 
            element={
              <PrivateRoute>
                <Terms />
              </PrivateRoute>
            } 
          />
          
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu/:id" element={<ProductDetail />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
