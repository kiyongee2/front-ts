
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './layouts/Home'
import ProductList from './products/ProductList'
import './App.css'
import ProductInfo from './products/ProductInfo'
import SignIn from './users/SignIn'
import AddProduct from './products/AddProduct'
import { useState } from 'react'
import DashBoard from './users/DashBoard'
import SignUp from './users/SignUp'
import Cart from './products/Cart'
import type { CartItem } from './products/Cart'


function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 로그인한 사용자 ID 관리
  const [userId, setUserId] = useState<string | null>(null);

  // 로그인한 사용자 권한 관리
  const [userRole, setUserRole] = useState<string | null>(null);

  // 로그인 핸들러 함수
  const handleLogin = (username: string, role: string) => {
    setIsLoggedIn(true);
    setUserId(username);
    setUserRole(role);
  }

  // 로그아웃 핸들러 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserRole(null);
  }

  // 장바구니 상태 관리
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === item.id);
      if (existing) {
        return prev.map(ci => ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
 
  return (
    <>
      <section className="app">
        <BrowserRouter basename='/shopping-test/'>
          <Header
            isLoggedIn={isLoggedIn}
            userId={userId}
            userRole={userRole}
            onLogout={handleLogout}
            cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path='/products/:id' element={<ProductInfo onAddToCart={handleAddToCart} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />} />
            <Route path='/products/add' element={<AddProduct />} />
            <Route path='/signin' element={<SignIn onLogin={handleLogin} />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App




