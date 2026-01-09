import React from 'react';
import { Typography, Container, Box, Link, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, SvgIcon } from '@mui/material';

const CALENDAR_URL = "https://calendar.zoho.eu/group/ical/zz08011230c3ec488a71ee3054a0ad96974bfca8647a8412e4840cc4033e0ca591a0cf046186e81a7cd729e15f8c16d447782acc75";

const CopyIcon = () => (
  <SvgIcon><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" /></SvgIcon>
);

export default function App() {
  const copyToClipboard = () => navigator.clipboard.writeText(CALENDAR_URL);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h3">Gear Club Portugal</Typography>
      <Typography variant="h4" gutterBottom>Events Calendar</Typography>
      
      <FormControl fullWidth sx={{ my: 3 }}>
        <InputLabel>Calendar URL</InputLabel>
        <OutlinedInput
          value={CALENDAR_URL}
          readOnly
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={copyToClipboard} edge="end"><CopyIcon /></IconButton>
            </InputAdornment>
          }
          label="Calendar URL"
        />
      </FormControl>

      <Typography variant="h5" sx={{ mt: 3 }}>Instructions</Typography>
      <Typography variant="body1" component="div">
        <ul>
          <li><strong>iOS:</strong> Calendar > File > New Calendar Subscription</li>
          <li><strong>Google:</strong> "Add by URL" in settings</li>
        </ul>
      </Typography>

      <Typography variant="body2" align="center" sx={{ mt: 4 }}>
        © {new Date().getFullYear()} <Link href="https://www.gearclubportugal.com/">Gear Club Portugal</Link>
      </Typography>
    </Container>
  );
}
