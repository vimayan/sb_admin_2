import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import PeopleContext from "../context/context";

export default function Lists({ name_list, path,remove_id }) {
  const peopleContext = React.useContext(PeopleContext);
  const {
    selected_student,
    selected_mentor,
    student_list_for_selected_mentor,
    mentor_list_for_selected_student,
  } = peopleContext;
  // console.log(name_list);
  const navigate = useNavigate();
  const onSelect = (list) => {
    if (path === "/students") {
      selected_student(list);
      mentor_list_for_selected_student(list);
    }
    if (path === "/teachers") {
      selected_mentor(list);
      student_list_for_selected_mentor(list);
    }
    navigate(`${path}/${list.name}`);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {name_list.length &&
        name_list.map((list) => (
          <div className="d-flex flex-column align-items-center" key={list._id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  sx={{ cursor: "pointer" }}
                  onClick={() => onSelect(list)}
                >
                  {list.name[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={list.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {list.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <div className="d-flex">
              <button
                onClick={() => onSelect(list)}
                className="btn btn-sm btn-success"
              >
                Check
              </button>
              <button
                onClick={() => remove_id(list)}
                className="btn btn-sm btn-danger"
              >
                -
              </button>
            </div>

            <Divider variant="inset" component="li" />
          </div>
        ))}
    </List>
  );
}
