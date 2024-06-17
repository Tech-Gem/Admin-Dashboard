import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';
// import { UserView } from 'src/sections/user/view';


// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Dozer UI </title>
      </Helmet>
      {/* <UserView /> */}

      <LoginView />
    </>
  );
}
