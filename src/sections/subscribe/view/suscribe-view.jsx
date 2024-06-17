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
import SubscribeRow from '../subscribe-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

const EQUIPMENT_API_URL = 'https://dozer-backend-tech-gem.onrender.com/api/v1/subscription';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkNmFiOTk1LWM2MzgtNDIxOC04YjYxLTU3Y2JjMjc0NTY5OSIsImlhdCI6MTcxODU3NTcwNSwiZXhwIjoxNzI2MzUxNzA1fQ.tsRvZZn32mS8o-3XtpEp96idLmQ_HM88WAUmYxCtMd0'; // Replace with your actual auth token

const SubscribePage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('subscriptionType');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(EQUIPMENT_API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });
        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.subscriptions)) {
          setSubscriptions(data.subscriptions);
        } else {
          throw new Error('Invalid data structure');
        }

        setLoading(false);
      } catch (fetchError) {
        console.error('Failed to fetch Subscribed users', fetchError);
        setError('Failed to fetch Subscribed users');
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n) => n.id);
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

  const handleDelete = (ids) => {
    const remainingSubscriptions = subscriptions.filter(
      (subscription) => !ids.includes(subscription.id)
    );
    setSubscriptions(remainingSubscriptions);
    setSelected([]);
  };

  const dataFiltered = applyFilter({
    inputData: subscriptions,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Subscribed Users</Typography>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
          onDelete={() => handleDelete(selected)} // Pass handleDelete function to toolbar
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={subscriptions.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  // { id: 'id', label: 'ID' },
                  { id: 'subscriptionType', label: 'Subscription Type' },
                  { id: 'subscriptionDuration', label: 'Subscription Duration' },
                  { id: 'startDate', label: 'StartDate' },
                  { id: 'endDate', label: 'EndDate' },
                  { id: 'subscriptionStatus', label: 'Subscription Status' },
                  { id: 'txRef', label: 'Transaction Reference' },
                  { id: 'paymentStatus', label: 'Payment Status' },
                  { id: 'userId', label: 'UserID' },
                  { id: 'createdAt', label: 'CreatedAt' },
                  { id: 'updatedAt', label: 'UpdatedAt' },
                  { id: 'status', label: 'Status' },
                  { id: '', label: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <SubscribeRow
                      key={row.id}
                      id={row.id}
                      subscriptionType={row.subscriptionType}
                      subscriptionDuration={row.subscriptionDuration}
                      startDate={row.startDate}
                      endDate={row.endDate}
                      subscriptionStatus={row.subscriptionStatus}
                      txRef={row.txRef}
                      paymentStatus={row.paymentStatus}
                      userId={row.userId}
                      createdAt={row.createdAt}
                      updatedAt={row.updatedAt}
                      selected={selected.indexOf(row.id) !== -1}
                      handleClick={(event) => handleClick(event, row.id)}
                      handleDelete={() => handleDelete([row.id])} // Pass handleDelete function with id
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, subscriptions.length)}
                />

                {dataFiltered.length === 0 && <TableNoData isNotFound={notFound} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={subscriptions.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
};

export default SubscribePage;
