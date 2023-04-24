import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  // backgroundColor: theme.status.danger,
  backgroundColor: theme.palette.neutral?.darker,
}));

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0 - 599px
            sm: 200, // 600 - 899px
            md: 300, // 900 - 1199px
            lg: 400, // 1200 - 1535
            xl: 500, // 1536
          },
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox />
    </>
  );
};

export default MuiResponsiveness;
