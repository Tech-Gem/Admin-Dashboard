import { lazy, Suspense } from 'react';
import { Outlet, 
  // Navigate,
   useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
// eslint-disable-next-line perfectionist/sort-imports
import AppPage from 'src/pages/app';
// eslint-disable-next-line perfectionist/sort-imports
import Book1Page from 'src/pages/book';
import RenterPage from 'src/pages/renter';
import SubscribePage from 'src/pages/subscribe';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        // { element: <IndexPage />, index: true },
        { path: 'dashbord', element: < AppPage/>
           },

        { path: 'User', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        { path: 'equipment', element: <ProductsPage /> },

        // { path: 'blog', element: <BlogPage /> },
        { path: 'bid', element: <BlogPage /> },
        {
          path: 'book',
          element: <Book1Page />,
        },
        {
          path: 'renter',
          element:  <RenterPage/>,
         
        },
        {
          path: 'subscribe' ,
          element:  <SubscribePage/>,
         
         
        },
    

        
      ],
    },
   
    // {
    //   path: 'Users',
    //   element: <Page404 />,
    // },
    {
      path: 'logout',
      element: <LoginPage />,
    },
    // {
    //   path: '*',
    //   // path: 'logout',

    //   element: <Navigate to="/404" replace />,
    // },
    {
      path: '',
      element: <LoginPage />,
    },  
  ]);

  return routes;
}
