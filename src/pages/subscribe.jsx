import { Helmet } from 'react-helmet-async';
// eslint-disable-next-line perfectionist/sort-imports
import { SubscribeView } from 'src/sections/subscribe/view';
// eslint-disable-next-line perfectionist/sort-imports


// ----------------------------------------------------------------------

export default function SubscribePage() {
  return (
    <>
      <Helmet>
        <title> User | Dozer UI </title>
      </Helmet>
      <SubscribeView/>
    </>
  );
}
