import { useState } from 'react';
import PropTypes from 'prop-types';
import { set, sub } from 'date-fns';
import { faker } from '@faker-js/faker';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.string.uuid(),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatar: null,
    type: 'order_placed',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: faker.person.fullName(),
    description: 'answered to your comment on the Minimal',
    avatar: '/assets/images/avatars/avatar_2.jpg',
    type: 'friend_interactive',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: 'You have new message',
    description: '5 unread messages',
    avatar: null,
    type: 'chat_message',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.string.uuid(),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatar: null,
    type: 'mail',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.string.uuid(),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatar: null,
    type: 'order_shipped',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen}>
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify width={24} icon="solar:bell-bing-bold-duotone" />
        </Badge>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                New
              </ListSubheader>
            }
          >
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Before that
              </ListSubheader>
            }
          >
            {notifications.slice(2, 5).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            View All
          </Button>
        </Box>
      </Popover>
    </>
  );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.isUnRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {fToNow(notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {notification.description}
      </Typography>
    </Typography>
  );

  if (notification.type === 'order_placed') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_package.svg" />,
      title,
    };
  }
  if (notification.type === 'order_shipped') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_shipping.svg" />,
      title,
    };
  }
  if (notification.type === 'mail') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_mail.svg" />,
      title,
    };
  }
  if (notification.type === 'chat_message') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_chat.svg" />,
      title,
    };
  }
  return {
    avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
    title,
  };
}
// import { useState, useEffect } from 'react';
// // eslint-disable-next-line perfectionist/sort-imports
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// // eslint-disable-next-line perfectionist/sort-imports
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import Badge from '@mui/material/Badge';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import Tooltip from '@mui/material/Tooltip';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemButton from '@mui/material/ListItemButton';

// import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';
// // eslint-disable-next-line perfectionist/sort-imports
// import { fToNow } from 'src/utils/format-time'; // Ensure this path is correct

// const NotificationsPopover = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [open, setOpen] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await fetch('https://dozer-backend-tech-gem.onrender.com/api/v1/booking', {
//           headers: {
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRkYjY3NzJiLWZhM2MtNGMzYi05NjQxLTc5ZmRiZTfmMTg5NCIsImlhdCI6MTcwNjUwNDg0MCwiZXhwIjoxNzE0MjgwODQwfQ.H-N5onRfG4bl1LZIYXC8OVgupovzVQ7FlwWQKiPn2qA`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         const today = new Date().toDateString();

//         const bookings = data.map((booking) => ({
//           id: booking.id,
//           title: booking.equipmentName,
//           description: `Equipment: ${booking.equipmentName}, Price: ${booking.equipmentPrice}, Email: ${booking.email}, Start Date: ${new Date(booking.startDate).toLocaleDateString()}, End Date: ${new Date(booking.endDate).toLocaleDateString()}, Quantity: ${booking.quantity}, Location: ${booking.location}`,
//           avatar: null,
//           type: null,
//           createdAt: new Date(booking.createdAt),
//           isUnRead: new Date(booking.createdAt).toDateString() === today,
//           bookedUserId: booking.user?.id, // Assuming there's a user object with an id
//         }));

//         setNotifications(bookings);
//       } catch (error) {
//         console.error('Error fetching notifications:', error);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

//   const handleOpen = (event) => {
//     setOpen(event.currentTarget);
//   };

//   const handleClose = () => {
//     setOpen(null);
//   };

//   const handleMarkAllAsRead = () => {
//     setNotifications(
//       notifications.map((notification) => ({
//         ...notification,
//         isUnRead: false,
//       }))
//     );
//   };

//   const handleNotificationClick = (notification) => {
//     history.push(`/user/${notification.bookedUserId}`); // Adjust the path according to your app's routing
//   };

//   return (
//     <>
//       <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen}>
//         <Badge badgeContent={totalUnRead} color="error">
//           <Iconify width={24} icon="solar:bell-bing-bold-duotone" />
//         </Badge>
//       </IconButton>

//       <Popover
//         open={!!open}
//         anchorEl={open}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         PaperProps={{
//           sx: {
//             mt: 1.5,
//             ml: 0.75,
//             width: 360,
//           },
//         }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="subtitle1">Notifications</Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               You have {totalUnRead} unread messages
//             </Typography>
//           </Box>

//           {totalUnRead > 0 && (
//             <Tooltip title="Mark all as read">
//               <IconButton color="primary" onClick={handleMarkAllAsRead}>
//                 <Iconify icon="eva:done-all-fill" />
//               </IconButton>
//             </Tooltip>
//           )}
//         </Box>

//         <Divider sx={{ borderStyle: 'dashed' }} />

//         <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
//           <List
//             disablePadding
//             subheader={
//               <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
//                 New
//               </ListSubheader>
//             }
//           >
//             {notifications.slice(0, 2).map((notification) => (
//               <NotificationItem key={notification.id} notification={notification} onClick={() => handleNotificationClick(notification)} />
//             ))}
//           </List>

//           <List
//             disablePadding
//             subheader={
//               <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
//                 Before that
//               </ListSubheader>
//             }
//           >
//             {notifications.slice(2, 5).map((notification) => (
//               <NotificationItem key={notification.id} notification={notification} onClick={() => handleNotificationClick(notification)} />
//             ))}
//           </List>
//         </Scrollbar>

//         <Divider sx={{ borderStyle: 'dashed' }} />

//         <Box sx={{ p: 1 }}>
//           <Button fullWidth disableRipple onClick={() => history.push('/notifications')}>
//             View All
//           </Button>
//         </Box>
//       </Popover>
//     </>
//   );
// };

// const NotificationItem = ({ notification, onClick }) => {
//   const { avatar, title } = renderContent(notification);

//   return (
//     <ListItemButton
//       onClick={onClick}
//       sx={{
//         py: 1.5,
//         px: 2.5,
//         mt: '1px',
//         ...(notification.isUnRead && {
//           bgcolor: 'action.selected',
//         }),
//       }}
//     >
//       <ListItemAvatar>
//         <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
//       </ListItemAvatar>
//       <ListItemText
//         primary={title}
//         secondary={
//           <Typography
//             variant="caption"
//             sx={{
//               mt: 0.5,
//               display: 'flex',
//               alignItems: 'center',
//               color: 'text.disabled',
//             }}
//           >
//             <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
//             {fToNow(notification.createdAt)}
//           </Typography>
//         }
//       />
//     </ListItemButton>
//   );
// };

// NotificationItem.propTypes = {
//   notification: PropTypes.shape({
//     createdAt: PropTypes.instanceOf(Date),
//     id: PropTypes.string,
//     isUnRead: PropTypes.bool,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     type: PropTypes.string,
//     avatar: PropTypes.string,
//     bookedUserId: PropTypes.string,
//   }),
//   onClick: PropTypes.func.isRequired,
// };

// const renderContent = (notification) => {
//   const title = (
//     <Typography variant="subtitle2">
//       {notification.title}
//       <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
//         &nbsp; {notification.description}
//       </Typography>
//     </Typography>
//   );

//   return {
//     avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
//     title,
//   };
// };

// export default NotificationsPopover;
