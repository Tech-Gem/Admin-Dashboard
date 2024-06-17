// import { useState } from 'react';

// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// // import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import TableBody from '@mui/material/TableBody';
// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// import { books } from 'src/_mock/book';

// // import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';

// import TableNoData from '../table-no-data';
// // import UserTableRow from '../user-table-row';
// import UserTableHead from '../user-table-head';
// import TableEmptyRows from '../table-empty-rows';
// import UserTableToolbar from '../user-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';
// // eslint-disable-next-line perfectionist/sort-imports
// import BookRow from '../book-row';

// // ----------------------------------------------------------------------

// export default function BookPage() {
//   const [page, setPage] = useState(0);

//   const [order, setOrder] = useState('asc');

//   const [selected, setSelected] = useState([]);

//   const [orderBy, setOrderBy] = useState('name');

//   const [filterName, setFilterName] = useState('');

//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleSort = (event, id) => {
//     const isAsc = orderBy === id && order === 'asc';
//     if (id !== '') {
//       setOrder(isAsc ? 'desc' : 'asc');
//       setOrderBy(id);
//     }
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = books.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];
//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setPage(0);
//     setRowsPerPage(parseInt(event.target.value, 10));
//   };

//   const handleFilterByName = (event) => {
//     setPage(0);
//     setFilterName(event.target.value);
//   };

//   const dataFiltered = applyFilter({
//     inputData: books,
//     comparator: getComparator(order, orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <Container>
//       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//         <Typography variant="h4"> Book Users</Typography>

//         {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
//           New User
//         </Button> */}
//       </Stack>

//       <Card>
//         <UserTableToolbar
//           numSelected={selected.length}
//           filterName={filterName}
//           onFilterName={handleFilterByName}
//         />

//         <Scrollbar>
//           <TableContainer sx={{ overflow: 'unset' }}>
//             <Table sx={{ minWidth: 800 }}>
//               <UserTableHead
//                 order={order}
//                 orderBy={orderBy}
//                 rowCount={books.length}
//                 numSelected={selected.length}
//                 onRequestSort={handleSort}
//                 onSelectAllClick={handleSelectAllClick}
//                 headLabel={[
//                   { id: 'bookuser', label: 'Book User' },
//                   { id: 'equipmentname', label: 'Equipment Name' },
//                   { id: 'date', label: 'Date' },
//                   { id: 'isVerified', label: 'Verified', align: 'center' },

//                   { id: '' },
                 
               
//                 ]}
//               />
          
//               <TableBody>
//                 {dataFiltered
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row) => (
//                     <BookRow
//                       key={row.id}
//                       bookuser={row.bookuser}
                      
                    
//                       equipmentname={row.equipmentname }
//                       date={row.date}

                  
//                       isVerified={row.isVerified}
//                       selected={selected.indexOf(row.name) !== -1}
//                       handleClick={(event) => handleClick(event, row.name)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={77}
//                   emptyRows={emptyRows(page, rowsPerPage, books.length)}
//                 />

//                 {notFound && <TableNoData query={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           page={page}
//           component="div"
//           count={books.length}
//           rowsPerPage={rowsPerPage}
//           onPageChange={handleChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Card>
//     </Container>
//   );
// }
// #####################################
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line perfectionist/sort-imports
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
// eslint-disable-next-line perfectionist/sort-imports
import Scrollbar from 'src/components/scrollbar';
// eslint-disable-next-line perfectionist/sort-imports
import TableNoData from '../table-no-data';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
// eslint-disable-next-line perfectionist/sort-imports
import BookRow from '../book-row';

const EQUIPMENT_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/bidSpace';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkNmFiOTk1LWM2MzgtNDIxOC04YjYxLTU3Y2JjMjc0NTY5OSIsImlhdCI6MTcxODU3NTcwNSwiZXhwIjoxNzI2MzUxNzA1fQ.tsRvZZn32mS8o-3XtpEp96idLmQ_HM88WAUmYxCtMd0';

export default function BidPage() {
  const [bids, setBids] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('userName');
  const [filterUserName, setFilterUserName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch(EQUIPMENT_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });
        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.bidSpaces)) {
          setBids(data.bidSpaces);
        } else {
          throw new Error('Invalid data structure');
        }

        setLoading(false);
      } catch (fetchError) {
        console.error('Failed to fetch bids', fetchError);
        setError('Failed to fetch bids');
        setLoading(false);
      }
    };

    fetchBids();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = bids.map((bid) => bid.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterUserNameChange = (event) => {
    setFilterUserName(event.target.value);
    setPage(0); // Reset page when filtering
  };

  const handleDelete = (id) => {
    const updatedBids = bids.filter((bid) => bid.id !== id);
    setBids(updatedBids);
    setSelected(selected.filter((selectedId) => selectedId !== id));
  };

  const handleBulkDelete = () => {
    const updatedBids = bids.filter((bid) => !selected.includes(bid.id));
    setBids(updatedBids);
    setSelected([]);
  };

  const handleSearch = () => {
    // Optional: Perform additional search-related operations here if needed
  };

  const filteredBids = applyFilter({
    inputData: bids,
    comparator: getComparator(order, orderBy),
    filterName: filterUserName.toLowerCase(), // Apply lowercase for case-insensitive search
  });

  const isNotFound = !filteredBids.length && !!filterUserName;

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Bids</Typography>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterUserName={filterUserName}
          onFilterUserNameChange={handleFilterUserNameChange}
          onSearch={handleSearch}
          onDelete={handleBulkDelete}
        />

        <Scrollbar>
          <TableContainer>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                numSelected={selected.length}
                rowCount={bids.length}
                headLabel={[
                  { id: 'name', label: 'User Name' },
                  { id: 'title', label: 'Title' },
                  { id: 'description', label: 'Description' },
                  { id: 'priceMin', label: 'Minimum Price' },
                  { id: 'priceMax', label: 'Maximum Price' },
                  { id: 'status', label: 'Status' },
                  { id: 'isHost', label: 'Is Host' },
                  { id: 'createdAt', label: 'Created At' },
                  { id: 'updatedAt', label: 'Updated At' },
                  { id: '', label: '' },
                ]}
              />
              <TableBody>
                {filteredBids
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((bid) => (
                    <BookRow
                      key={bid.id}
                      id={bid.id}
                      name={bid.userName}
                      title={bid.title}
                      description={bid.description}
                      priceMin={bid.priceMin}
                      priceMax={bid.priceMax}
                      status={bid.status}
                      isHost={bid.isHost}
                      createdAt={bid.createdAt.split('T')[0]}
                      updatedAt={bid.updatedAt.split('T')[0]}
                      selected={selected.includes(bid.id)}
                      handleClick={(event) => handleClick(event, bid.id)}
                      handleDelete={handleDelete}
                    />
                  ))}
                {filteredBids.length === 0 && (
                  <TableNoData isNotFound={isNotFound} />
                )}
                <TableEmptyRows
                  emptyRows={emptyRows(page, rowsPerPage, filteredBids.length)}
                />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredBids.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
