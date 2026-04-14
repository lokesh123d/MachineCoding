import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import ProductListing from './components/product-listing'
import ProductItem from './components/product-item'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import {
  homeLoader,
  NotFound,
  productItemLoader,
  productsLoader,
  RootLayout,
  RouteErrorBoundary,
} from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<RouteErrorBoundary />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="home" element={<Home />} loader={homeLoader} />

      <Route path="products">
        <Route index element={<ProductListing />} loader={productsLoader} />
        <Route path=":id" element={<ProductItem />} loader={productItemLoader} />
      </Route>

      <Route path="legacy-products" element={<Navigate to="/products" replace />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
