import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import { VseAksii, NoutBook, UspeyKupit, Holodilnik, Konditsioner, Televizior, Premium, StiralnieMashini, Carrera, mMerch, Status, Izbranoe } from './routes/routes'
import Loader from './components/Loader/loader'
import Busket from './pages/Busket/Busket'

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: (
        <Suspense fallback={<Loader/>}>{" "}<Layout/></Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader/>}><Home/></Suspense>
          )
        },
        {
          path: '/VseAksii',
          element: (
            <Suspense fallback={<Loader/>}><VseAksii/></Suspense>
          )
        },
        {
          path: '/NoutBook',
          element: (
            <Suspense fallback={<Loader/>}><NoutBook/></Suspense>
          )
        },
        {
          path: '/UspeyKupit',
          element: (
            <Suspense fallback={<Loader/>}><UspeyKupit/></Suspense>
          )
        },
        {
          path: '/Holodilnik',
          element: (
            <Suspense fallback={<Loader/>}><Holodilnik/></Suspense>
          )
        },
        {
          path: '/Konditsioner',
          element: (
            <Suspense fallback={<Loader/>}><Konditsioner/></Suspense>
          )
        },
        {
          path: '/Televizior',
          element: (
            <Suspense fallback={<Loader/>}><Televizior/></Suspense>
          )
        },
        {
          path: '/Premium',
          element: (
            <Suspense fallback={<Loader/>}><Premium/></Suspense>
          )
        },
        {
          path: '/Carrera',
          element: (
            <Suspense fallback={<Loader/>}><Carrera/></Suspense>
          )
        },
        {
          path: '/StiralnieMashini',
          element: (
            <Suspense fallback={<Loader/>}><StiralnieMashini/></Suspense>
          )
        },
        {
          path: 'mMerch',
          element: (
            <Suspense fallback={<Loader/>}><mMerch/></Suspense>
          )
        },
        {
          path: 'Status',
          element: (
            <Suspense fallback={<Loader/>}><Status/></Suspense>
          )
        },
        {
          path: 'Busket',
          element: (
            <Suspense fallback={<Loader/>}><Busket/></Suspense>
          )
        },
        {
          path: 'Izbranoe',
          element: (
            <Suspense fallback={<Loader/>}><Izbranoe/></Suspense>
          )
        },
      ]
    }
  ])
  
  return (<RouterProvider router={router}/>)
}

export default App