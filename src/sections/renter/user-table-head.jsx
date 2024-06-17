import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line perfectionist/sort-imports
import TableHead from '@mui/material/TableHead';
// eslint-disable-next-line perfectionist/sort-imports
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// eslint-disable-next-line perfectionist/sort-imports
import Checkbox from '@mui/material/Checkbox';
import TableSortLabel from '@mui/material/TableSortLabel';
// eslint-disable-next-line perfectionist/sort-imports
import Typography from '@mui/material/Typography';
// eslint-disable-next-line perfectionist/sort-imports
import Box from '@mui/material/Box';

import { visuallyHidden } from './utils';

export default function UserTableHead({
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onSelectAllClick,
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ fontSize: '16px', fontWeight: 'bold' }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={{ ...visuallyHidden }}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </Typography>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

UserTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headLabel: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      width: PropTypes.string,
      minWidth: PropTypes.string,
    })
  ).isRequired,
  numSelected: PropTypes.number.isRequired,
};
