import { Container, Progress } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal, Checkbox } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";

const Goal = ({ goal, setModalGoal, modalGoal, setGoal }) => {
  const handleClose = () => {
    setModalGoal(false);
    setGoal([]);
  };

  const token = localStorage.getItem("@GestãoDeHábitos:access") || "";
  const handleDelete = () => {
    axios
      .delete(
        `https://kabit-api.herokuapp.com/goals/${goal.id}/`,

        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        toast.success("Deleted");
        setModalGoal(false);
      })
      .catch((e) => {
        toast.error("Error!");
      });
  };
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      margin: "0 auto",
      display: "flex",
      width: "90%",
      borderRadius: "4px",
      padding: "0",
    },
  }));
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modalGoal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalGoal}>
        <div className={classes.paper}>
          <Container>
            <div className="container__nameGoal">
              <strong>{"Goal"}</strong>
            </div>

            <div className="container__infoGoal">
              <h2>{goal.title}</h2>
              <p>Difficulty: {goal.difficulty}</p>
              <div className="achieved">
                <Progress
                  value={goal.how_much_achieved}
                  text={`${goal.how_much_achieved}%`}
                />
                <div className="check">
                  <Checkbox />
                  <span>Daily check</span>
                </div>
              </div>
              <div className="container__buttons">
                <button onClick={() => handleClose()}>Back</button>
                <button onClick={() => handleDelete()}>Delete</button>
              </div>
            </div>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default Goal;