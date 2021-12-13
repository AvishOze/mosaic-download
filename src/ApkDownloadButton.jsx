import Button from "@mui/material/Button";
import AndroidIcon from '@mui/icons-material/Android';

import apkFile from './apk/Mosaic.apk';

export default function ApkDownloadButton() {
  return (
    <Button startIcon={<AndroidIcon fontSize="large" />} variant="contained" color="error" href={apkFile} download="Mosaic.apk">
      Download APK
    </Button>
  )
}