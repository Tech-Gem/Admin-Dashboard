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

// import { equipments } from 'src/_mock/equipment';
// // import { users } from 'src/_mock/user';

// // import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';

// import TableNoData from '../table-no-data';
// // import UserTableRow from '../user-table-row';
// import EquipmentRow from '../equipment-row';
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
//       const newSelecteds = equipments.map((n) => n.name);
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
//     inputData: equipments,
//     comparator: getComparator(order, orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <Container>
//       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//         <Typography variant="h4">Equipments</Typography>

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
//                 rowCount={equipments.length}
//                 numSelected={selected.length}
//                 onRequestSort={handleSort}
//                 onSelectAllClick={handleSelectAllClick}
//                 headLabel={[
//                   { id: 'name', label: 'Name' },
//                   { id: 'catagory', label: 'Catagory' },
//                   { id: 'postedby', label: 'Posted By' },
//                   { id: 'posteddate', label: 'Posted Date' },
//                   { id: '' },
//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row) => (
//                     <EquipmentRow
//                       key={row.id}
//                       name={row.name}
//                       catagory={row.catagory}
//                       postedby={row.postedby}
//                       posteddate={row.posteddate}
//                       selected={selected.indexOf(row.name) !== -1}
//                       handleClick={(event) => handleClick(event, row.name)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={77}
//                   emptyRows={emptyRows(page, rowsPerPage, equipments.length)}
//                 />

//                 {notFound && <TableNoData query={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           page={page}
//           component="div"
//           count={equipments.length}
//           rowsPerPage={rowsPerPage}
//           onPageChange={handleChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Card>
//     </Container>
//   );
// }

// ###########################################################################
// equipment-page.js

// equipment-page.js

// equipment-page.js

// equipment-page.js
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
import EquipmentRow from '../equipment-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

const EQUIPMENT_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/equipments';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkNmFiOTk1LWM2MzgtNDIxOC04YjYxLTU3Y2JjMjc0NTY5OSIsImlhdCI6MTcxODU3NTcwNSwiZXhwIjoxNzI2MzUxNzA1fQ.tsRvZZn32mS8o-3XtpEp96idLmQ_HM88WAUmYxCtMd0'; // Replace with your actual auth token

const EquipmentPage = () => {
  const [equipments, setEquipments] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch(EQUIPMENT_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });
        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.formattedEquipments)) {
          setEquipments(data.formattedEquipments);
        } else {
          throw new Error('Invalid data structure');
        }

        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch equipments', error);
        setFetchError('Failed to fetch equipments');
        setLoading(false);
      }
    };

    fetchEquipments();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = equipments.map((n) => n.id);
      setSelected(newSelecteds);
    } else {
      setSelected([]);
    }
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

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
    setPage(0);
  };

  const handleDelete = async (idsToDelete) => {
    try {
      await Promise.all(
        idsToDelete.map(id =>
          fetch(`${EQUIPMENT_API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          })
        )
      );

      const remainingEquipments = equipments.filter(equipment => !idsToDelete.includes(equipment.id));
      setEquipments(remainingEquipments);
      setSelected([]);
    } catch (deleteError) {
      console.error('Failed to delete equipment', deleteError);
    }
  };

  const dataFiltered = applyFilter({
    inputData: equipments,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (fetchError) {
    return <Typography>{fetchError}</Typography>;
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Equipments</Typography>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
          onDelete={() => handleDelete(selected)} // Pass selected items to delete
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={equipments.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'quantity', label: 'Quantity' },
                  { id: 'pricePerHour', label: 'PricePerHour' },
                  { id: 'location', label: 'Location' },
                  { id: 'category', label: 'Category' },
                  { id: 'capacity', label: 'Capacity' },
                  { id: 'isBooked', label: 'IsBooked' },
                  { id: 'phoneNumber', label: 'PhoneNumberOfOwener' },
                  { id: 'owner', label: 'NameOfOwner' },
                  { id: '', label: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <EquipmentRow
                      key={row.id}
                      id={row.id}
                      name={row.name}
                      quantity={row.quantity}
                      pricePerHour={row.pricePerHour}
                      rating={row.rating}
                      location={row.location}
                      description={row.description}
                      category={row.category}
                      image={row.image[0]} // Assuming image is an array, access the first URL
                      capacity={row.capacity}
                      model={row.model}
                      specifications={row.specifications}
                      transportation={row.transportation}
                      isBooked={row.isBooked}
                      phoneNumber={row.phoneNumber}
                      owner={row.owner}
                      selected={selected.indexOf(row.id) !== -1}
                      handleClick={(event) => handleClick(event, row.id)}
                      handleDelete={() => handleDelete([row.id])} // Pass handleDelete function with id
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, equipments.length)}
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
          count={equipments.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
};

export default EquipmentPage;
