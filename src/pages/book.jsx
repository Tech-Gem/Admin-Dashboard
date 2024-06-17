import { Helmet } from 'react-helmet-async';
// eslint-disable-next-line perfectionist/sort-imports
import { BookView } from 'src/sections/book/view';




// ----------------------------------------------------------------------

export default function Book1Page() {
  return (
    <>
      <Helmet>
        <title> Products | Dozer UI </title>
      </Helmet>

      <BookView/>
      
    </>
  );
}
