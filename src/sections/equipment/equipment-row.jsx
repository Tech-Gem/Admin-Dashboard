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

// export default function EquipmentRow({
//   selected,
//   name,
//   catagory,
//   postedby,
//   posteddate,
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
//             {/* <Avatar alt={name} src={avatarUrl} /> */}
//             <Typography variant="subtitle2" noWrap>
//               {name}
//             </Typography>
//           </Stack>
//         </TableCell>
//         <TableCell>{catagory}</TableCell>
//         <TableCell>{postedby}</TableCell>
//         {/* <TableCell>{postedby}</TableCell> */}

//         <TableCell>{posteddate}</TableCell>


//         {/* <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell> */}

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

// EquipmentRow.propTypes = {
//  selected: PropTypes.any,
//   name: PropTypes.any,
//   catagory: PropTypes.any,
//   postedby: PropTypes.any,
//   posteddate: PropTypes.string,
//   handleClick: PropTypes.func,
// import Iconify from 'src/components/iconify';


// };
import { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line perfectionist/sort-imports
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line perfectionist/sort-imports
import Iconify from '../../components/iconify'; // Update the import path here

function EquipmentRow({
  selected,
  handleClick,
  id,
  name,
  quantity,
  pricePerHour,
  rating,
  location,
  description,
  category,
  image,
  capacity,
  model,
  specifications,
  transportation,
  isBooked,
  phoneNumber,
  owner,
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
          <Checkbox disableRipple checked={selected} onChange={(event) => handleClick(event, id)} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{quantity}</TableCell>
        <TableCell>{pricePerHour}</TableCell>
        <TableCell>{location}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{capacity}</TableCell>

        {/* <TableCell align="center">{transportation ? 'Yes' : 'No'}</TableCell> */}
        <TableCell align="center">{isBooked ? 'Yes' : 'No'}</TableCell>
        <TableCell>{phoneNumber}</TableCell>
        <TableCell>{owner}</TableCell>

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

EquipmentRow.propTypes = {
  selected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  pricePerHour: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  specifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  transportation: PropTypes.bool.isRequired,
  isBooked: PropTypes.bool.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default EquipmentRow;
