import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'

import Homenew from './Pages/Homenew'
import { useEffect } from 'react';



// --- 1. Create a Analytics Wrapper ---
// This component listens for URL changes and sends them to Google
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}
function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<WebLayout />}> */}
         <Route path="/" element={
          <>
            <AnalyticsTracker /> {/* Tracks every route change */}
            <WebLayout />
          </>
        }>

          <Route index element={<Homenew />} />
        
        </Route>


      </>


    )

  )


  return (
    <>
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
