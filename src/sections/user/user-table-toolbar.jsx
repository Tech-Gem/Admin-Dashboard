import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line perfectionist/sort-imports
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
// eslint-disable-next-line perfectionist/sort-imports
import Tooltip from '@mui/material/Tooltip';
// eslint-disable-next-line perfectionist/sort-imports
import Iconify from 'src/components/iconify';

export default function UserTableToolbar({ numSelected, filterEmail, onFilterEmailChange, onSearch, onDelete }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          value={filterEmail}
          onChange={onFilterEmailChange}
          onKeyDown={handleKeyPress}
          placeholder="Search by email..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={onDelete}>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterEmail: PropTypes.string,
  onFilterEmailChange: PropTypes.func,
  onSearch: PropTypes.func,
  onDelete: PropTypes.func,
};
