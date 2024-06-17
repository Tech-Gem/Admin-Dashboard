import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`}
   sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    // path: '/dashbord',

    path: '/dashbord',
    icon: icon('ic_analytics'),
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('ic_user'),
  },
   {
    title: 'Renter',
    path: '/renter',
    icon: icon('ic_user'),
  },
  {
    title: 'Equipment',
    path: '/equipment',

    // path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'BidList',
    path: '/bid',

    // path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Booking',
    path: '/book',

    // path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Subscribed',
    path: '/subscribe',
    icon: icon('ic_cart'),
  },
  {
    title: 'Logout',
    path: '/logout',

    // path: '/404',
    icon: icon('ic_disabled'),
  },
  // {
  //   title: '',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
