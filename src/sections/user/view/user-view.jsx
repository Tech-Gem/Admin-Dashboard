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

// import { users } from 'src/_mock/user';

// // import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';

// import TableNoData from '../table-no-data';
// import UserTableRow from '../user-table-row';
// import UserTableHead from '../user-table-head';
// import TableEmptyRows from '../table-empty-rows';
// import UserTableToolbar from '../user-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';

// // ----------------------------------------------------------------------

// export default function EquipmentPage() {
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
//       const newSelecteds = users.map((n) => n.name);
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
//     inputData: users,
//     comparator: getComparator(order, orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <Container>
//       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//         <Typography variant="h4">Users</Typography>

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
//                 rowCount={users.length}
//                 numSelected={selected.length}
//                 onRequestSort={handleSort}
//                 onSelectAllClick={handleSelectAllClick}
//                 headLabel={[
//                   { id: 'name', label: 'Name' },
//                   { id: 'email', label: 'email' },
//                   { id: 'phone', label: 'phone' },
//                    { id: 'status', label: 'Status' },
//                   { id: '' },
//                   // { id: 'company', label: 'Company' },
//                     // { id: 'role', label: 'Role' },
//                   // { id: 'isVerified', label: 'Verified', align: 'center' },

//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row) => (
//                     <UserTableRow
//                       key={row.id}
//                       name={row.name}
//                       // role={row.role}
//                       status={row.status}
//                       // company={row.company}
//                       phone={row.phone}
//                       email={row.email}

//                       avatarUrl={row.avatarUrl}
//                       // isVerified={row.isVerified}
//                       selected={selected.indexOf(row.name) !== -1}
//                       handleClick={(event) => handleClick(event, row.name)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={77}
//                   emptyRows={emptyRows(page, rowsPerPage, users.length)}
//                 />

//                 {notFound && <TableNoData query={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           page={page}
//           component="div"
//           count={users.length}
//           rowsPerPage={rowsPerPage}
//           onPageChange={handleChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Card>
//     </Container>
//   );
// }

// // import { useState, useEffect } from 'react';
// // // eslint-disable-next-line perfectionist/sort-imports
// // import Card from '@mui/material/Card';
// // import Stack from '@mui/material/Stack';
// // import Table from '@mui/material/Table';
// // import Container from '@mui/material/Container';
// // import TableBody from '@mui/material/TableBody';
// // import Typography from '@mui/material/Typography';
// // import TableContainer from '@mui/material/TableContainer';
// // import TablePagination from '@mui/material/TablePagination';
// // import CircularProgress from '@mui/material/CircularProgress';
// // // eslint-disable-next-line perfectionist/sort-imports
// // import Scrollbar from 'src/components/scrollbar';
// // // eslint-disable-next-line perfectionist/sort-imports
// // import TableNoData from '../table-no-data';
// // import UserTableRow from '../user-table-row';
// // import UserTableHead from '../user-table-head';
// // import TableEmptyRows from '../table-empty-rows';
// // import UserTableToolbar from '../user-table-toolbar';
// // import { emptyRows, applyFilter, getComparator } from '../utils';

// // export default function EquipmentPage() {
// //   const [page, setPage] = useState(0);
// //   const [order, setOrder] = useState('asc');
// //   const [selected, setSelected] = useState([]);
// //   const [orderBy, setOrderBy] = useState('name');
// //   const [filterName, setFilterName] = useState('');
// //   const [rowsPerPage, setRowsPerPage] = useState(5);
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch(
// //           'https://dozer-backend-tech-gem.onrender.com/api/v1/users',
// //           {
// //             headers: {
// //               'method': 'GET',
// //               'Content-Type': 'application/json',
// //               'Authorization':
// //                 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlZmRkZDQzLTFhODYtNGNlMS1iM2U4LWI4ZWI0NTIxMmI3ZCIsImlhdCI6MTcxNTYzNjMyMCwiZXhwIjoxNzIzNDEyMzIwfQ.eUQQAsPgNARrIPkafLMaukHiEV_H3T2GjV6l-GEOuGE',
// //               'mode': 'no-cors',
// //             },
// //           }
// //         );
// //         const data = await response.json();
// //         if (response.ok) {
// //           setUsers(data.users);
// //         } else {
// //           throw new Error(data.message || 'Failed to fetch users');
// //         }
// //       } catch (fetchError) {
// //         setError(fetchError.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   const handleSort = (event, id) => {
// //     const isAsc = orderBy === id && order === 'asc';
// //     if (id !== '') {
// //       setOrder(isAsc ? 'desc' : 'asc');
// //       setOrderBy(id);
// //     }
// //   };

// //   const handleSelectAllClick = (event) => {
// //     if (event.target.checked) {
// //       const newSelecteds = users.map((n) => n.name);
// //       setSelected(newSelecteds);
// //       return;
// //     }
// //     setSelected([]);
// //   };

// //   const handleClick = (event, name) => {
// //     const selectedIndex = selected.indexOf(name);
// //     let newSelected = [];
// //     if (selectedIndex === -1) {
// //       newSelected = newSelected.concat(selected, name);
// //     } else if (selectedIndex === 0) {
// //       newSelected = newSelected.concat(selected.slice(1));
// //     } else if (selectedIndex === selected.length - 1) {
// //       newSelected = newSelected.concat(selected.slice(0, -1));
// //     } else if (selectedIndex > 0) {
// //       newSelected = newSelected.concat(
// //         selected.slice(0, selectedIndex),
// //         selected.slice(selectedIndex + 1)
// //       );
// //     }
// //     setSelected(newSelected);
// //   };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setPage(0);
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //   };

// //   const handleFilterByName = (event) => {
// //     setPage(0);
// //     setFilterName(event.target.value);
// //   };

// //   const dataFiltered = applyFilter({
// //     inputData: users,
// //     comparator: getComparator(order, orderBy),
// //     filterName,
// //   });

// //   const notFound = !dataFiltered.length && !!filterName;

// //   return (
// //     <Container>
// //       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
// //         <Typography variant="h4">Users</Typography>
// //       </Stack>

// //       <Card>
// //         <UserTableToolbar
// //           numSelected={selected.length}
// //           filterName={filterName}
// //           onFilterName={handleFilterByName}
// //         />

// //         <Scrollbar>
// //           <TableContainer sx={{ overflow: 'unset' }}>
// //             <Table sx={{ minWidth: 800 }}>
// //               <UserTableHead
// //                 order={order}
// //                 orderBy={orderBy}
// //                 rowCount={users.length}
// //                 numSelected={selected.length}
// //                 onRequestSort={handleSort}
// //                 onSelectAllClick={handleSelectAllClick}
// //                 headLabel={[
// //                   { id: 'id', label: 'ID' },
// //                   { id: 'email', label: 'Email' },
// //                   { id: 'phoneNumber', label: 'Phone Number' },
// //                   { id: 'role', label: 'Role' },
// //                   { id: 'createdAt', label: 'Created At' },
// //                   { id: 'updatedAt', label: 'Updated At' },
                  
// //                 ]}
// //               />
// //               <TableBody>
// //                 {loading && (
// //                   <tr>
// //                     <td colSpan={6} align="center">
// //                       <CircularProgress />
// //                     </td>
// //                   </tr>
// //                 )}
// //                 {error && (
// //                   <tr>
// //                     <td colSpan={6} align="center">
// //                       Error: {error}
// //                     </td>
// //                   </tr>
// //                 )}
// //                 {!loading && !error && (
// //                   dataFiltered
// //                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //                     .map((row) => (
// //                       <UserTableRow
// //                         key={row.id}
// //                         email={row.email}
// //                         phoneNumber={row.phoneNumber}
// //                         role={row.role}
// //                         createdAt={row.createdAt}
// //                         updatedAt={row.updatedAt}
// //                         selected={selected.indexOf(row.name) !== -1}
// //                         handleClick={(event) => handleClick(event, row.name)}
// //                       />
// //                     ))
// //                 )}

// //                 <TableEmptyRows
// //                   height={77}
// //                   emptyRows={emptyRows(page, rowsPerPage, users.length)}
// //                 />

// //                 {notFound && <TableNoData query={filterName} />}
// //               </TableBody>
// //             </Table>
// //           </TableContainer>
// //         </Scrollbar>

// //         <TablePagination
// //           page={page}
// //           component="div"
// //           count={users.length}
// //           rowsPerPage={rowsPerPage}
// //           onPageChange={handleChangePage}
// //           rowsPerPageOptions={[5, 10, 25]}
// //           onRowsPerPageChange={handleChangeRowsPerPage}
// //         />
// //       </Card>
// //     </Container>
// //   );
// // }
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
import UserRow from '../user-table-row';

const EQUIPMENT_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/users';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjMzMyZTMwLTg5YjktNGExMS05NjMwLWY0ZDZkZTBlNmNmMCIsImlhdCI6MTcxODUzMjk0MCwiZXhwIjoxNzI2MzA4OTQwfQ.__z9qcVIBu-40X7j8duG3jESS2WynNhm2fAG_nTzgcQ';

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('email');
  const [filterEmail, setFilterEmail] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(EQUIPMENT_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });
        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          throw new Error('Invalid data structure');
        }

        setLoading(false);
      } catch (fetchError) {
        console.error('Failed to fetch users', fetchError);
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.email);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, email) => {
    const selectedIndex = selected.indexOf(email);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, email);
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
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByEmailChange = (event) => {
    setFilterEmail(event.target.value);
  };

  const handleSearch = () => {
    setPage(0);
  };

  const handleDeleteSelected = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => !selected.includes(user.email)));
    setSelected([]);
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName: filterEmail,
  });

  const notFound = !dataFiltered.length && !!filterEmail;

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterEmail={filterEmail}
          onFilterEmailChange={handleFilterByEmailChange}
          onSearch={handleSearch}
          onDelete={handleDeleteSelected}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'email', label: 'Email' },
                  { id: 'phoneNumber', label: 'PhoneNumber' },
                  { id: 'role', label: 'Role' },
                  { id: 'isSubscribed', label: 'IsSubscribed' },
                  { id: 'createdAt', label: 'Created At' },
                  { id: 'updatedAt', label: 'Updated At' },
                  { id: '', label: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserRow
                      key={row.id}
                      id={row.id}
                      email={row.email}
                      phoneNumber={row.phoneNumber}
                      role={row.role}
                      isSubscribed={row.isSubscribed}
                      createdAt={row.createdAt}
                      updatedAt={row.updatedAt}
                      selected={selected.indexOf(row.email) !== -1}
                      handleClick={(event) => handleClick(event, row.email)}
                      handleDelete={handleDelete}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

{dataFiltered.length === 0 && (
                  <TableNoData isNotFound={notFound} />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
