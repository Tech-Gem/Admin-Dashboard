import { Helmet } from 'react-helmet-async';
// eslint-disable-next-line perfectionist/sort-imports
import { RenterView } from 'src/sections/renter/view';


// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Dozer UI </title>
      </Helmet>
<RenterView/>
    </>
  );
}
