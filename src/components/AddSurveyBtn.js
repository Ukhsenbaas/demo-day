import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export const AddSurveyBtn = ({ addQuestion }) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            + Add new question
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                addQuestion("single-selection");
                popupState.close();
              }}
            >
              Single
            </MenuItem>
            <MenuItem
              onClick={() => {
                addQuestion("multi-selection");
                popupState.close();
              }}
            >
              Multi
            </MenuItem>
            <MenuItem
              onClick={() => {
                addQuestion("open");
                popupState.close();
              }}
            >
              Open
            </MenuItem>
            <MenuItem
              onClick={() => {
                addQuestion("rating");
                popupState.close();
              }}
            >
              Rating
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
