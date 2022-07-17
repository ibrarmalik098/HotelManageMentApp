import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function SMButton(props) {
  const { loading, label, disabled, onClick, type } = props;
  return (
    <>
      <Button
        disabled={loading || disabled}
        type={type}
        label={label}
        onClick={onClick}
        variant="contained">

        {loading ? <CircularProgress /> : label}
      </Button>
    </>
  );
}
export default SMButton;
