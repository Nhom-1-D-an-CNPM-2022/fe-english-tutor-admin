import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Fab from '@mui/material/Fab';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Tutor.scss';

import manageUserApi from '../../services/manageUserApi';
import { toast } from 'react-toastify';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Tutor = () => {
  const navigate = useNavigate();
  const [listTutors, setListTutors] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const getListTutors = async (number, page) => {
    const response = await manageUserApi.getListTutors({ number: number, page: page * 10 });
    setListTutors(response.data);
  };

  const getTotalPage = async () => {
    const totalPage = await manageUserApi.getListTutors({ number: 0, page: 0 });
    setTotalPage(totalPage.data.length);
  };

  useEffect(() => {
    getListTutors(10, currentPage);
  }, [currentPage]);

  useEffect(() => {
    getTotalPage();
  }, []);

  const handlePagination = (event, value) => {
    setCurrentPage(value - 1);
  };

  const handleBlock = async (tutorId, status, id) => {
    const dataUpdate = {
      status: 'approved',
    };

    const statusUpdate = await manageUserApi.approveTutor({ tutorId, dataUpdate });

    if (statusUpdate.data) {
      toast.success('Phê duyệt gia sư thành công!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      const listTutorsTemp = listTutors;
      listTutorsTemp[id].isVerified = !status;
      setListTutors([...[], ...listTutorsTemp]);
    } else {
      toast.warn('Phê duyệt gia sư thất bại!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleGoToTutorProfile = (index) => {
    navigate(`/manage-tutor/profile/${listTutors[index]._id}`, { replace: true });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">STT</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Họ Tên</StyledTableCell>
              <StyledTableCell align="center">Xem hồ sơ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listTutors.length !== 0 &&
              listTutors.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{currentPage * 10 + index + 1}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.fullname}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="up"
                      onClick={() => handleGoToTutorProfile(index)}
                    >
                      <ArrowForwardIcon />
                    </Fab>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPage > 10 && (
        <div className="tutor__pagination">
          <Pagination
            count={(totalPage - (totalPage % 10)) / 10}
            page={currentPage + 1}
            variant="outlined"
            color="primary"
            onChange={handlePagination}
          />
        </div>
      )}
    </>
  );
};
