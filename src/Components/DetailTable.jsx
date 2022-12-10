import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		fontSize: 18,
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 16,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {	backgroundColor: theme.palette.action.hover },
	'&:last-child td, &:last-child th': {	border: 0	},
}));

export default function DetailTable({ name, username, id,email,phone,website }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
							<StyledTableCell align="right">ID</StyledTableCell>
							<StyledTableCell align="right">Nombre</StyledTableCell>
							<StyledTableCell align="right">Username</StyledTableCell>
							<StyledTableCell align="right">Email</StyledTableCell>
							<StyledTableCell align="right">Phone</StyledTableCell>
							<StyledTableCell align="right">Website</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<StyledTableRow key={name}>
						<StyledTableCell align="right" component="th" scope="row">{id}</StyledTableCell>
						<StyledTableCell align="right" component="th" scope="row">{name}</StyledTableCell>
						<StyledTableCell align="right" component="th" scope="row">{username}</StyledTableCell>
						<StyledTableCell align="right" component="th" scope="row">{email}</StyledTableCell>
						<StyledTableCell align="right" component="th" scope="row">{phone}</StyledTableCell>
						<StyledTableCell align="right" component="th" scope="row">{website}</StyledTableCell>
					</StyledTableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
