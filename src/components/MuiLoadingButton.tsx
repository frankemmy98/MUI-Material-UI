import React from "react";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton variant="outlined" loading loadingIndicator="Loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
