import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import UploadInput from '../UploadInput/UploadInput';
import { Container } from '@mui/material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Container maxWidth="1200px">
        <Box width={500}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <UploadInput />
          </BottomNavigation>
        </Box>
      </Container>
    </div>
  );
}
