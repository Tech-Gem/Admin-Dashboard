import { Helmet } from 'react-helmet-async';

// import { NotFoundView } from 'src/sections/error';
import { UserView } from 'src/sections/user/view';


// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>
      <UserView />

      {/* <NotFoundView /> */}
    </>
  );
}
