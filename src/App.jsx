import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Landing,
  HomeLayout,
  About,
  Error,
  SingleMeal,
  Newsletter,
  Preview,
} from './Pages/index'
import { loader as landingLoader } from './Pages/Landing'
import { loader as SingleMealLoader } from './Pages/SingleMeal'
import { action as newsletterAction } from './Pages/Newsletter'
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 2 } },
})
const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        element: <Landing></Landing>,
        index: true,
        loader: landingLoader(queryClient),
      },
      {
        path: 'meal/:id',
        element: <SingleMeal></SingleMeal>,
        loader: SingleMealLoader(queryClient),
      },
      {
        path: 'newsletter',
        element: <Newsletter></Newsletter>,
        action: newsletterAction,
      },
      { path: 'about', element: <About></About> },
      { path: 'preview', element: <Preview></Preview> },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
