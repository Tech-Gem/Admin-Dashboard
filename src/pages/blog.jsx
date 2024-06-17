import { Helmet } from 'react-helmet-async';

// import { BlogView } from 'src/sections/blog/view';
// import { UserView } from 'src/sections/user/view';
import { BidView } from 'src/sections/bid/view';


// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog |Dozer UI </title>
      </Helmet>
      {/* <UserView /> */}

      {/* <BlogView /> */}
      <BidView/>
    </>
  );
}
