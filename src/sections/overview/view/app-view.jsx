// // import { faker } from '@faker-js/faker';

// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// // import Iconify from 'src/components/iconify';

// // import AppTasks from '../app-tasks';
// // import AppNewsUpdate from '../app-news-update';
// // import AppOrderTimeline from '../app-order-timeline';
// import AppCurrentVisits from '../app-current-visits';
// import AppWebsiteVisits from '../app-website-visits';
// import AppWidgetSummary from '../app-widget-summary';
// // import AppTrafficBySite from '../app-traffic-by-site';
// // import AppCurrentSubject from '../app-current-subject';
// // import AppConversionRates from '../app-conversion-rates';

// // ----------------------------------------------------------------------

// export default function AppView() {
//   return (
//     <Container maxWidth="xl">
//       <Typography variant="h4" sx={{ mb: 5 }}>
//         Hi, Welcome back 👋
//       </Typography>

//       <Grid container spacing={3}>
//         <Grid xs={10} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Total Users"
//             total={714000}
//             color="success"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
//           />
//         </Grid>

//         <Grid xs={10} sm={6} md={3}>
//           <AppWidgetSummary
//             title=" total Book User"
//             total={1352831}
//             color="info"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
//           />
//         </Grid>
//         <Grid xs={6} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Subscribed User"
//             total={1352831}
//             color="info"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
//           />
//         </Grid>

//         <Grid xs={10} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Total Equipments"
//             total={1723315}
//             color="warning"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
//           />
//         </Grid>

//         <Grid xs={10} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Today Listing"
//             total={234}
//             color="error"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
//           />
//         </Grid>

//         <Grid xs={10} md={4} lg={7}>
//           <AppWebsiteVisits
//             title="Total post & Total Book "
//             // subheader="total Book"
//             chart={{
//               labels: [
//                 '01/01/2003',
//                 '02/01/2003',
//                 '03/01/2003',
//                 '04/01/2003',
//                 '05/01/2003',
//                 '06/01/2003',
//                 '07/01/2003',
//                 '08/01/2003',
//                 '09/01/2003',
//                 '10/01/2003',
//                 '11/01/2003',
//               ],
//               series: [
//                 {
//                   name: 'total post',
//                   type: 'column',
//                   fill: 'solid',
//                   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
//                 },
//                 {
//                   name: ' total book',
//                   type: 'area',
//                   fill: 'gradient',
//                   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
//                 },
//                 // {
//                 //   name: 'Team C',
//                 //   type: 'line',
//                 //   fill: 'solid',
//                 //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
//                 // },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid xs={9} md={4} lg={4}>
//           <AppCurrentVisits
//             // title="Current Visits"
//             chart={{
//               series: [
//                 { label: 'total users', value: 4344 },
//                 { label: 'book users', value: 5435 },
//                 // { label: 'Europe', value: 1443 },
//                 // { label: 'Africa', value: 4443 },
//               ],
//             }}
//           />
//         </Grid> 

//         {/* <Grid xs={12} md={6} lg={8}>
//           <AppConversionRates
//             title="Conversion Rates"
//             subheader="(+43%) than last year"
//             chart={{
//               series: [
//                 { label: 'Italy', value: 400 },
//                 { label: 'Japan', value: 430 },
//                 { label: 'China', value: 448 },
//                 { label: 'Canada', value: 470 },
//                 { label: 'France', value: 540 },
//                 { label: 'Germany', value: 580 },
//                 { label: 'South Korea', value: 690 },
//                 { label: 'Netherlands', value: 1100 },
//                 { label: 'United States', value: 1200 },
//                 { label: 'United Kingdom', value: 1380 },
//               ],
//             }}
//           />
//         </Grid> */}

//         {/* <Grid xs={12} md={6} lg={4}>
//           <AppCurrentSubject
//             title="Current Subject"
//             chart={{
//               categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
//               series: [
//                 { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
//                 { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
//                 { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
//               ],
//             }}
//           />
//         </Grid> */}
// {/* 
//         <Grid xs={12} md={6} lg={8}>
//           <AppNewsUpdate
//             title="News Update"
//             list={[...Array(5)].map((_, index) => ({
//               id: faker.string.uuid(),
//               title: faker.person.jobTitle(),
//               description: faker.commerce.productDescription(),
//               image: `/assets/images/covers/cover_${index + 1}.jpg`,
//               postedAt: faker.date.recent(),
//             }))}
//           />
//         </Grid> */}

//         {/* <Grid xs={12} md={6} lg={4}>
//           <AppOrderTimeline
//             title="Order Timeline"
//             list={[...Array(5)].map((_, index) => ({
//               id: faker.string.uuid(),
//               title: [
//                 '1983, orders, $4220',
//                 '12 Invoices have been paid',
//                 'Order #37745 from September',
//                 'New order placed #XF-2356',
//                 'New order placed #XF-2346',
//               ][index],
//               type: `order${index + 1}`,
//               time: faker.date.past(),
//             }))}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={4}>
//           <AppTrafficBySite
//             title="Traffic by Site"
//             list={[
//               {
//                 name: 'FaceBook',
//                 value: 323234,
//                 icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
//               },
//               {
//                 name: 'Google',
//                 value: 341212,
//                 icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
//               },
//               {
//                 name: 'Linkedin',
//                 value: 411213,
//                 icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
//               },
//               {
//                 name: 'Twitter',
//                 value: 443232,
//                 icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
//               },
//             ]}
//           />
//         </Grid> */}
// {/* 
//         <Grid xs={12} md={6} lg={8}>
//           <AppTasks
//             title="Tasks"
//             list={[
//               { id: '1', name: 'Create FireStone Logo' },
//               { id: '2', name: 'Add SCSS and JS files if required' },
//               { id: '3', name: 'Stakeholder Meeting' },
//               { id: '4', name: 'Scoping & Estimations' },
//               { id: '5', name: 'Sprint Showcase' },
//             ]}
//           />
//         </Grid> */}
//       </Grid>
//     </Container>
//   );
// }

// #############################################################
// import React, { useState, useEffect } from 'react';
// // eslint-disable-next-line perfectionist/sort-imports
// import Container from '@mui/material/Container';
// // eslint-disable-next-line perfectionist/sort-imports
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// // eslint-disable-next-line perfectionist/sort-imports
// import AppWidgetSummary from '../app-widget-summary';
// // import AppWebsiteVisits from '../app-website-visits';
// // import AppCurrentVisits from '../app-current-visits';

// // API URLs and Authentication Tokens
// const USERS_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/users';
// const BOOKING_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/booking';
// const EQUIPMENT_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/equipments';
// const USERS_AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIwMzgxM2RhLTdhNGQtNDJiOC04NzEyLTI3MjUxZTNlMzg3YiIsImlhdCI6MTcxODQxNTE2NSwiZXhwIjoxNzI2MTkxMTY1fQ.l7gAQl2z7c1PObIh1NSyYmAI1yAP_1Ib8XkC71hnoLE';
// const BOOKING_AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIwMzgxM2RhLTdhNGQtNDJiOC04NzEyLTI3MjUxZTNlMzg3YiIsImlhdCI6MTcxODQxNTE2NSwiZXhwIjoxNzI2MTkxMTY1fQ.l7gAQl2z7c1PObIh1NSyYmAI1yAP_1Ib8XkC71hnoLE';
// const EQUIPMENTS_AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIwMzgxM2RhLTdhNGQtNDJiOC04NzEyLTI3MjUxZTNlMzg3YiIsImlhdCI6MTcxODQxNTE2NSwiZXhwIjoxNzI2MTkxMTY1fQ.l7gAQl2z7c1PObIh1NSyYmAI1yAP_1Ib8XkC71hnoLE'; // Assuming same token for equipments

// const formatDate = (date) => {
//   const d = new Date(date);
//   return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
// };

// const AppView = () => {
//   const [totalUsers, setTotalUsers] = useState(null);
//   const [bookedUsers, setBookedUsers] = useState(null);
//   const [totalEquipments, setTotalEquipments] = useState(null);
//   const [todaysEquipments, setTodaysEquipments] = useState(null);
//   const [chartData, setChartData] = useState({ labels: [], series: [] });

//   useEffect(() => {
//     const fetchTotalUsers = async () => {
//       try {
//         const response = await fetch(USERS_API_URL, {
//           headers: {
//             Authorization: `Bearer ${USERS_AUTH_TOKEN}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         setTotalUsers(result.data.length); // Assuming API returns an array with length
//       } catch (error) {
//         console.error('Error fetching total users:', error);
//       }
//     };

//     const fetchBookedUsers = async () => {
//       try {
//         const response = await fetch(BOOKING_API_URL, {
//           headers: {
//             Authorization: `Bearer ${BOOKING_AUTH_TOKEN}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         setBookedUsers(result.data.length); // Assuming API returns an array with length
//       } catch (error) {
//         console.error('Error fetching booked users:', error);
//       }
//     };

//     const fetchEquipments = async () => {
//       try {
//         const response = await fetch(EQUIPMENT_API_URL, {
//           headers: {
//             Authorization: `Bearer ${EQUIPMENTS_AUTH_TOKEN}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         // eslint-disable-next-line prefer-destructuring
//         const equipments = result.data.equipments;
//         const today = new Date().toISOString().split('T')[0];

//         // Filter equipments created today
//         const todaysEquipmentsCount = equipments.filter(
//           (equipment) => equipment.createdAt.split('T')[0] === today
//         ).length;

//         // Calculate total equipments
//         setTotalEquipments(equipments.length);
//         setTodaysEquipments(todaysEquipmentsCount);

//         // Process data for chart
//         const labels = [];
//         const totalPostData = [];
//         const totalBookData = [];

//         // Group equipments by creation date and count bookings
//         const groupedByDate = equipments.reduce((acc, equipment) => {
//           const date = equipment.createdAt.split('T')[0];
//           if (!acc[date]) {
//             acc[date] = { totalPost: 0, totalBook: 0 };
//           }
//           acc[date].totalPost = (acc[date].totalPost || 0) + 1; // Initialize totalPost correctly
//           acc[date].totalBook = (acc[date].totalBook || 0) + equipment.bookings.length; // Assuming equipment.bookings is an array
//           return acc;
//         }, {});

//         // Push data into arrays for chart
//         Object.keys(groupedByDate).forEach((date) => {
//           labels.push(formatDate(date));
//           totalPostData.push(groupedByDate[date].totalPost);
//           totalBookData.push(groupedByDate[date].totalBook); // Add total book data
//         });

//         setChartData({
//           labels,
//           series: [
//             {
//               name: 'Total Post',
//               type: 'column',
//               fill: 'solid',
//               data: totalPostData,
//             },
//             {
//               name: 'Total Book',
//               type: 'area',
//               fill: 'gradient',
//               data: totalBookData, // Replace with actual booking data
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching equipments:', error);
//       }
//     };

//     fetchTotalUsers();
//     fetchBookedUsers();
//     fetchEquipments();
//   }, []);

//   if (totalUsers === null || bookedUsers === null || totalEquipments === null || todaysEquipments === null || chartData.labels.length === 0) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Container maxWidth="xl">
//       <Typography variant="h4" sx={{ mb: 5 }}>
//         Hi, Welcome back 👋
//       </Typography>

//       <Grid container spacing={3}>
//         {/* <Grid item xs={12} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Total Users"
//             total={totalUsers}
//             color="success"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Booked Users"
//             total={bookedUsers}
//             color="info"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
//           />
//         </Grid> */}

//         <Grid item xs={12} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Total Equipments"
//             total={totalEquipments}
//             color="warning"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
//           />
//         </Grid>

//         {/* <Grid item xs={12} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Today's Equipments"
//             total={todaysEquipments}
//             color="error"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
//           />
//         </Grid> */}

//         {/* <Grid item xs={12} md={6} lg={8}>
//           <AppWebsiteVisits
//             title="Total post & Total Book"
//             chart={chartData}
//           />
//         </Grid> */}
// {/* 
//         <Grid item xs={12} md={6} lg={4}>
//           <AppCurrentVisits
//             title="Total Users and Booked Users"
//             chart={{
//               series: [
//                 { label: 'Total Users', value: totalUsers },
//                 { label: 'Booked Users', value: bookedUsers },
//               ],
//             }}
//           />
//         </Grid> */}
//       </Grid>
//     </Container>
//   );
// };

// export default AppView;
// ###################################
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line perfectionist/sort-imports
import Container from '@mui/material/Container';
// eslint-disable-next-line perfectionist/sort-imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line perfectionist/sort-imports
import AppWidgetSummary from '../app-widget-summary';
import AppWebsiteVisits from '../app-website-visits';
import AppCurrentVisits from '../app-current-visits';

const EQUIPMENT_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/equipments';
const USER_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/users';
const BOOKINGS_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/bookings';
const SUBSCRIPTIONS_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/subscription';
const BIDS_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/bidSpace';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkNmFiOTk1LWM2MzgtNDIxOC04YjYxLTU3Y2JjMjc0NTY5OSIsImlhdCI6MTcxODU3NTcwNSwiZXhwIjoxNzI2MzUxNzA1fQ.tsRvZZn32mS8o-3XtpEp96idLmQ_HM88WAUmYxCtMd0';

export default function AppView() {
  const [totalEquipments, setTotalEquipments] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalBookings, setTotalBookings] = useState(null);
  const [totalSubscriptions, setTotalSubscriptions] = useState(null);
  const [totalBids, setTotalBids] = useState(null);

  const [todayUsers, setTodayUsers] = useState(0);
  const [todayBookings, setTodayBookings] = useState(0);
  const [todaySubscriptions, setTodaySubscriptions] = useState(0);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch(EQUIPMENT_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Equipments API result:', result);
        if (result.formattedEquipments && Array.isArray(result.formattedEquipments)) {
          setTotalEquipments(result.formattedEquipments.length);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch(USER_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Users API result:', result);
        if (result.users && Array.isArray(result.users)) {
          setTotalUsers(result.users.length);
          const today = new Date().toISOString().split('T')[0];
          const todayUsersCount = result.users.filter(user => user.createdAt.split('T')[0] === today).length;
          setTodayUsers(todayUsersCount);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await fetch(BOOKINGS_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Bookings API result:', result);
        if (Array.isArray(result.bookings)) {
          setTotalBookings(result.bookings.length);
          const today = new Date().toISOString().split('T')[0];
          const todayBookingsCount = result.bookings.filter(booking => booking.createdAt.split('T')[0] === today).length;
          setTodayBookings(todayBookingsCount);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(SUBSCRIPTIONS_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Subscriptions API result:', result);
        if (Array.isArray(result.subscriptions)) {
          setTotalSubscriptions(result.subscriptions.length);
          const today = new Date().toISOString().split('T')[0];
          const todaySubscriptionsCount = result.subscriptions.filter(subscription => subscription.createdAt.split('T')[0] === today).length;
          setTodaySubscriptions(todaySubscriptionsCount);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    const fetchBids = async () => {
      try {
        const response = await fetch(BIDS_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Bids API result:', result);
        if (Array.isArray(result.bidSpaces)) {
          setTotalBids(result.bidSpaces.length);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching bids:', error);
      }
    };

    const fetchData = async () => {
      await fetchEquipments();
      await fetchUsers();
      await fetchBookings();
      await fetchSubscriptions();
      await fetchBids();
    };

    fetchData();
  }, []);

  if (totalEquipments === null || totalUsers === null || totalBookings === null || totalSubscriptions === null || totalBids === null) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="xl">
    <Typography variant="h4" sx={{ mb: 3 }}>
      Hi, Welcome back 👋
    </Typography>
  
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Total Equipments"
          total={totalEquipments}
          color="warning"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Total Number Users"
          total={totalUsers}
          color="success"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Total Bookings"
          total={totalBookings}
          color="info"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Total Subscriptions"
          total={totalSubscriptions}
          color="primary"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Today User"
          total={todayUsers}
          color="error"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Today's Book"
          total={todayBookings}
          color="error"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Today Subsc"
          total={todaySubscriptions}
          color="error"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ my: 2 }}>
        <AppWidgetSummary
          title="Total Bid"
          total={totalBids}
          color="error"
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
        />
      </Grid>
  
     
  
      <Grid item xs={12} md={6} lg={5} sx={{ my: 2 }}>
        <AppCurrentVisits
          title="Total Users and Equipments"
          chart={{
            series: [
              { label: 'total users', value: totalUsers },
              { label: 'total equipments', value: totalEquipments },
            ],
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={5} sx={{ my: 2 }}>
        <AppCurrentVisits
          title="Total subscriber and bokking"
          chart={{
            series: [
              { label: 'total subscribe', value: totalSubscriptions },
              { label: 'total Book', value: totalBookings },
            ],
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{ my: 2 }}>
        <AppWebsiteVisits
          title="Total subscribe & Total Book "
          // subheader="total Book"
          chart={{
            labels: [
              '01/01/2003',
              '02/01/2003',
              '03/01/2003',
              '04/01/2003',
              '05/01/2003',
              '06/01/2003',
              '07/01/2003',
              '08/01/2003',
              '09/01/2003',
              '10/01/2003',
              '11/01/2003',
            ],
            series: [
              {
                name: 'total subscribe',
                type: 'column',
                fill: 'solid',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
              },
              {
                name: ' total book',
                type: 'area',
                fill: 'gradient',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  </Container>
  
  );
}
