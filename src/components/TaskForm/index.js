import { Button } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
  render() {
    // const {classes} = this.props;
    const { classes, open, handleClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.name}
            margin="normal"
            defaultValue="Hello World"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            className={classes.TextField}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
