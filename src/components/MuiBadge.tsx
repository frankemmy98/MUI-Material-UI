import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack m={5} spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999} invisible={true}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
