import React, { useState } from 'react';
// eslint-disable-next-line perfectionist/sort-imports
import PropTypes from 'prop-types';
// eslint-disable-next-line perfectionist/sort-imports
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line perfectionist/sort-imports
import Button from '@mui/material/Button'; // Import Button from MUI
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
// eslint-disable-next-line perfectionist/sort-imports
import Iconify from 'src/components/iconify';

function SubscribeRow({
  selected,
  handleClick,
  id,
  subscriptionType,
  subscriptionDuration,
  startDate,
  endDate,
  subscriptionStatus,
  txRef,
  paymentStatus,
  userId,
  createdAt,
  updatedAt,
  handleDelete,
}) {
  const [open, setOpen] = useState(null);
  const [verified, setVerified] = useState(false);

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

  const handleVerifyClick = () => {
    setVerified(true);
    handleCloseMenu();
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox
            disableRipple
            checked={selected}
            onChange={(event) => handleClick(event, id)}
          />
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          <Typography variant="subtitle2" noWrap>
            {id}
          </Typography>
        </TableCell>
        <TableCell>{subscriptionType}</TableCell>
        <TableCell>{subscriptionDuration}</TableCell>
        <TableCell>{new Date(startDate).toLocaleDateString()}</TableCell>
        <TableCell>{new Date(endDate).toLocaleDateString()}</TableCell>
        <TableCell>{subscriptionStatus}</TableCell>
        <TableCell>{txRef}</TableCell>
        <TableCell>{paymentStatus}</TableCell>
        <TableCell>{userId}</TableCell>
        <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
        <TableCell>{new Date(updatedAt).toLocaleDateString()}</TableCell>
        <TableCell>
          {txRef && (
            <Button
              variant="contained"
              onClick={handleVerifyClick}
              disabled={verified}
              sx={{
                bgcolor: verified ? 'green' : 'primary.main',
                color: verified ? 'green' : 'inherit',
                '&:hover': {
                  bgcolor: verified ? 'green' : 'primary.dark',
                },
              }}
            >
              {verified ? 'Verified' : 'Verify'}
            </Button>
          )}
        </TableCell>
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

SubscribeRow.propTypes = {
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  subscriptionType: PropTypes.string.isRequired,
  subscriptionDuration: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  subscriptionStatus: PropTypes.string.isRequired,
  txRef: PropTypes.string,
  paymentStatus: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default SubscribeRow;
