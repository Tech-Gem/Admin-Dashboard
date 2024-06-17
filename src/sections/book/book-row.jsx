// import { useState } from 'react';
// import PropTypes from 'prop-types';

// import Stack from '@mui/material/Stack';
// // import Avatar from '@mui/material/Avatar';
// import Popover from '@mui/material/Popover';
// import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
// import MenuItem from '@mui/material/MenuItem';
// import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

// // import Label from 'src/components/label';
// import Iconify from 'src/components/iconify';

// // ----------------------------------------------------------------------

// export default function BookRow({
//   selected,
//   bookuser,
//   equipmentname,
//   date,
//   isVerified,
//   handleClick,
// }) {
//   const [open, setOpen] = useState(null);

//   const handleOpenMenu = (event) => {
//     setOpen(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setOpen(null);
//   };

//   return (
//     <>
//       <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
//         <TableCell padding="checkbox">
//           <Checkbox disableRipple checked={selected} onChange={handleClick} />
//         </TableCell>

//         <TableCell component="th" scope="row" padding="none">
//           <Stack direction="row" alignItems="center" spacing={2}>
//             <Typography variant="subtitle2" noWrap>
//               {bookuser}
//             </Typography>
//           </Stack>
//         </TableCell>
//         <TableCell>{equipmentname}</TableCell>
//         <TableCell>{date}</TableCell>

//         <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

//         {/* <TableCell>
//           <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
//         </TableCell> */}

//         <TableCell align="right">
//           <IconButton onClick={handleOpenMenu}>
//             <Iconify icon="eva:more-vertical-fill" />
//           </IconButton>
//         </TableCell>
//       </TableRow>

//       <Popover
//         open={!!open}
//         anchorEl={open}
//         onClose={handleCloseMenu}
//         anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         PaperProps={{
//           sx: { width: 140 },
//         }}
//       >
//         {/* <MenuItem onClick={handleCloseMenu}>
//           <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
//           Edit
//         </MenuItem> */}

//         <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
//           <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
//           Delete
//         </MenuItem>
//       </Popover>
//     </>
//   );
// }

// BookRow.propTypes = {
//   selected: PropTypes.any,
//   bookuser: PropTypes.any,
//   equipmentname: PropTypes.any,
//   date: PropTypes.string,
//   isVerified: PropTypes.any,
//   handleClick: PropTypes.func,
// };
// import { useState } from 'react';
// import PropTypes from 'prop-types';

// import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
// import Popover from '@mui/material/Popover';
// import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
// import MenuItem from '@mui/material/MenuItem';
// import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

// import Label from 'src/components/label';
// import Iconify from 'src/components/iconify';

// // ----------------------------------------------------------------------

// export default function UserTableRow({
//   selected,
//   name,
//   avatarUrl,
//   email,
//   phone,
//   // company,
//   // role,
//   // isVerified,
//   status,
//   handleClick,
// }) {
//   const [open, setOpen] = useState(null);

//   const handleOpenMenu = (event) => {
//     setOpen(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setOpen(null);
//   };

//   return (
//     <>
//       <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
//         <TableCell padding="checkbox">
//           <Checkbox disableRipple checked={selected} onChange={handleClick} />
//         </TableCell>

//         <TableCell component="th" scope="row" padding="none">
//           <Stack direction="row" alignItems="center" spacing={2}>
//             <Avatar alt={name} src={avatarUrl} />
//             <Typography variant="subtitle2" noWrap>
//               {name}
//             </Typography>
//           </Stack>
//         </TableCell>

//         {/* <TableCell>{company}</TableCell> */}
//         <TableCell>{email}</TableCell>

//         {/* <TableCell>{role}</TableCell> */}
//         <TableCell>{phone}</TableCell>

//         {/* <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell> */}

//         <TableCell>
//           <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
//         </TableCell>

//         <TableCell align="right">
//           <IconButton onClick={handleOpenMenu}>
//             <Iconify icon="eva:more-vertical-fill" />
//           </IconButton>
//         </TableCell>
//       </TableRow>

//       <Popover
//         open={!!open}
//         anchorEl={open}
//         onClose={handleCloseMenu}
//         anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         PaperProps={{
//           sx: { width: 140 },
//         }}
//       >
//         <MenuItem onClick={handleCloseMenu}>
//           <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
//           Edit
//         </MenuItem>

//         <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
//           <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
//           Delete
//         </MenuItem>
//       </Popover>
//     </>
//   );
// }

// UserTableRow.propTypes = {
//   avatarUrl: PropTypes.any,
//   // company: PropTypes.any,
//   handleClick: PropTypes.func,
//   // isVerified: PropTypes.any,
//   name: PropTypes.any,
//   email: PropTypes.any,
//   phone: PropTypes.any,

//   // role: PropTypes.any,
//   selected: PropTypes.any,
//   status: PropTypes.string,
// };

// // import { useState } from 'react';
// // import PropTypes from 'prop-types';

// // import Stack from '@mui/material/Stack';
// // import Avatar from '@mui/material/Avatar';
// // import Popover from '@mui/material/Popover';
// // import TableRow from '@mui/material/TableRow';
// // import Checkbox from '@mui/material/Checkbox';
// // import MenuItem from '@mui/material/MenuItem';
// // import TableCell from '@mui/material/TableCell';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';

// // // import Label from 'src/components/label';
// // import Iconify from 'src/components/iconify';

// // // ----------------------------------------------------------------------

// // export default function UserTableRow({
// //   selected,

// //   avatarUrl,
// //   id,
// //   email,
// //   phoneNumber,
// //   role,
// //   createdAt,
// //   updatedAt,
// //   // email,
// //   // phone,
// //   // name,
// //   // status,
// //   handleClick,
// // }) {
// //   const [open, setOpen] = useState(null);

// //   const handleOpenMenu = (event) => {
// //     setOpen(event.currentTarget);
// //   };

// //   const handleCloseMenu = () => {
// //     setOpen(null);
// //   };

// //   return (
// //     <>
// //       <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
// //         <TableCell padding="checkbox">
// //           <Checkbox disableRipple checked={selected} onChange={handleClick} />
// //         </TableCell>

// //         <TableCell component="th" scope="row" padding="none">
// //           <Stack direction="row" alignItems="center" spacing={2}>
// //             <Avatar alt={email} src={avatarUrl} />
// //             <Typography variant="subtitle2" noWrap>
// //               {id}
// //             </Typography>
// //           </Stack>
// //         </TableCell>

// //         {/* <TableCell>{company}</TableCell> */}
// //         <TableCell>{email}</TableCell>

// //         <TableCell>{phoneNumber}</TableCell>
// //         <TableCell>{role}</TableCell>

// //         <TableCell>{createdAt}</TableCell>
// //         <TableCell>{updatedAt}</TableCell>

// //         {/* <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell> */}

// //         {/* <TableCell>
// //           <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
// //         </TableCell> */}

// //         <TableCell align="right">
// //           <IconButton onClick={handleOpenMenu}>
// //             <Iconify icon="eva:more-vertical-fill" />
// //           </IconButton>
// //         </TableCell>
// //       </TableRow>

// //       <Popover
// //         open={!!open}
// //         anchorEl={open}
// //         onClose={handleCloseMenu}
// //         anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
// //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
// //         PaperProps={{
// //           sx: { width: 140 },
// //         }}
// //       >
// //         {/* <MenuItem onClick={handleCloseMenu}>
// //           <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
// //           Edit
// //         </MenuItem> */}

// //         <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
// //           <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
// //           Delete
// //         </MenuItem>
// //       </Popover>
// //     </>
// //   );
// // }

// // UserTableRow.propTypes = {
// //   avatarUrl: PropTypes.any,
// //   handleClick: PropTypes.func,
// //   // name: PropTypes.any,
// //   // email: PropTypes.any,
// //   // phone: PropTypes.any,

// //   selected: PropTypes.any,
// //   // status: PropTypes.string,

// //     id:  PropTypes.any,
// //     email:  PropTypes.any,
// //     phoneNumber:  PropTypes.any,
// //     role:  PropTypes.any,
// //     createdAt: PropTypes.any,
// //     updatedAt: PropTypes.any,

// // };
import React, { useState } from 'react';
// eslint-disable-next-line perfectionist/sort-imports
import PropTypes from 'prop-types';
// eslint-disable-next-line perfectionist/sort-imports
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line perfectionist/sort-imports
import Popover from '@mui/material/Popover';
// eslint-disable-next-line perfectionist/sort-imports
import Iconify from 'src/components/iconify';

function BidRow({
  selected,
  handleClick,
  id,
  name,
  title,
  description,
  priceMin,
  priceMax,
  status,
  isHost,
  createdAt,
  updatedAt,
  handleDelete,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleDeleteClick = () => {
    handleDelete(id);
    handleCloseMenu();
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{priceMin}</TableCell>
        <TableCell>{priceMax}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>{isHost ? 'Yes' : 'No'}</TableCell>
        <TableCell>{createdAt}</TableCell>
        <TableCell>{updatedAt}</TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleDeleteClick} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

BidRow.propTypes = {
  selected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isHost: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BidRow;
