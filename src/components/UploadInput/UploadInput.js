import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';

import XLSX from 'xlsx';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const uploadHandler = (event) => {
    const excel = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(excel);
    fileReader.onload = (e) => {
      const data = e.target.result;
      const workBook = XLSX.read(data, { type: 'binary' });
      workBook.SheetNames.forEach((sheet) => {
        const rowObject = XLSX.utils.sheet_to_row_object_array(
          workBook.Sheets[sheet]
        );
        dispatch(actions.setMarks(rowObject));
      });
    };
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          accept=".xls,.xlsx"
          id="contained-button-file"
          multiple
          type="file"
          onChange={uploadHandler}
        />
        <Button variant="contained" component="span">
          Upload Excel
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input
          id="icon-button-file"
          type="file"
          accept=".xls,.xlsx"
          onChange={uploadHandler}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <UploadFileIcon />
        </IconButton>
      </label>
    </Stack>
  );
}
