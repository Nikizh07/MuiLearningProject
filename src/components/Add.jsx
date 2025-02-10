import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const Add = () => {
  const [Mopen, setMopen] = React.useState(false);
  return (
    <div>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        title="Add"
        onClick={() => setMopen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={Mopen}
        onClose={() => setMopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} bgcolor={"background.default"} p={3} borderRadius={5}>
          <Typography variant="h6" color="lightcoral" align="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="John Doe"
            />
            <Typography variant="h6" fontWeight={100}>
              John Doe
            </Typography>
          </UserBox>
          <br />
          <TextField
            id="standard-multiline-static"
            label="Add Post"
            multiline
            rows={3}
            placeholder="Type Something..."
            variant="standard"
            sx={{ width: "100%" }}
          />
            <Stack direction={"row"} spacing={2} marginTop={2}>
                <Tooltip title="Add Photo">
                  <Avatar>📷</Avatar>
                </Tooltip>
                <Tooltip title="Add Video">
                  <Avatar>🎥</Avatar>
                </Tooltip>
                <Tooltip title="Add Audio">
                  <Avatar>🎵</Avatar>
                </Tooltip>
            </Stack>
            <br />
            <Button variant="contained" sx={{width: "100%"}}>Post</Button>
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;
