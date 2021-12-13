import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function GitHubButton() {
  return (
    <Button href="https://github.com/AvishOze/Mosaic" target="_blank" startIcon={<GitHubIcon />} variant="contained" color="warning">
      GitHub Repository
    </Button>
  )
}