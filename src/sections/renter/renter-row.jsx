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
import Iconify from 'src/components/iconify'; // Update the import path here

function RenterRow({
  selected,
  handleClick,
  id,
  email,
  phoneNumber,
  role,
  isSubscribed,
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
          <Checkbox disableRipple checked={selected} onChange={(event) => handleClick(event, email)} />
        </TableCell>

        {/* <TableCell>{id}</TableCell> */}

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {email}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{phoneNumber}</TableCell>
        <TableCell>{role}</TableCell>
        <TableCell>{isSubscribed ? 'Yes' : 'No'}</TableCell> {/* Display isSubscribed as 'Yes' or 'No' */}

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

RenterRow.propTypes = {
  selected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RenterRow;
