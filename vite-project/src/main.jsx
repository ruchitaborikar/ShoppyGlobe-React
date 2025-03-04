import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './components/ProductList.jsx'
import { Suspense } from 'react'
import { lazy } from 'react'
const Cart = lazy(() => import("./components/Cart.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));


const appRoute = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<ProductList/>
      },
      {
        path:'/product/:id',
        element:(  <Suspense fallback={<div>Loading Product Details...</div>}>
          <ProductDetails />
        </Suspense>)
      },
      {
        path:'/cart',
        element:(  <Suspense fallback={<div>Loading Cart...</div>}>
          <Cart />
        </Suspense>)
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>
)
