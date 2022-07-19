import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function SingleSong(props: any) {
  let song = props.song;
  const navigate = useNavigate();

  return (
    <>
      <TableRow>
        <TableCell align="right" component="th" scope="row">
          {song.title}
        </TableCell>
        <TableCell align="right">{song.artist}</TableCell>
        <TableCell align="right">{song.gener}</TableCell>
        <TableCell align="right">{String(song.length)} minuts</TableCell>
        <TableCell align="right">{String(song.price)} ₪</TableCell>
        <IconButton
          aria-label="delete"
          onClick={() => {
            props.deleteSong(song.id);
          }}
        >
          <DeleteIcon sx={{ color: "black" }} />
        </IconButton>

        <IconButton
          key="edit-btn"
          size="large"
          sx={{
            margin: 2,
            background: "pink",
            ":hover": { background: "rgb(53 44 173)" },
          }}
          onClick={() => {
            const path = `/myEditSong/` + song.id;
            navigate(path);
          }}
        >
          <BorderColorIcon />
        </IconButton>
      </TableRow>
    </>
  );
}
export default SingleSong;
