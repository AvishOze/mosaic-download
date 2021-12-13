import Grid from '@mui/material/Grid';

import Logo from './Logo'
import ImageCarousel from './ImageCarousel';
import ApkDownloadButton from './ApkDownloadButton';
import GitHubButton from './GitHubButton';

export default function App() {
  return (
    <Grid container direction="column" alignItems="center" spacing={5}>
      <Grid item /> {/* Top margin */}
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <ImageCarousel />
      </Grid>
      <Grid item>
        <ApkDownloadButton />
        &nbsp;
        &nbsp;
        <GitHubButton />
      </Grid>
    </Grid>
  );
}
