import Typography from '@mui/material/Typography';

import logo from './images/logo.png';

export default function Logo() {
  return (
    <Typography variant="h1" component="span"><img  style={{ float: 'left' }} src={logo} alt="Mosaic Logo" width={100} />&nbsp;Mosaic</Typography>
  );
}