import { Helmet } from 'react-helmet-async';

// import { ProductsView } from 'src/sections/products/view';
// import { UserView } from 'src/sections/user/view';
import { EquipmentsView } from 'src/sections/equipment/view/';


// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products | Dozer UI </title>
      </Helmet>

      {/* <ProductsView /> */}
      {/* <UserView /> */}
      <EquipmentsView/>
      
    </>
  );
}
