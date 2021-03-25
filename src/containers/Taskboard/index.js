import { withStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read matial ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'With my friend',
    status: 1,
  },
  {
    id: 3,
    title: 'Play game',
    description: 'Game terarria 1.4',
    status: 2,
  },
];
class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList key={status.value} tasks={taskFiltered} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} handleClose={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          onClick={this.openForm}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {/* <AddIcon></AddIcon> Thêm mới công việc */}
          <Icon fontSize="small">add_icon</Icon>
          Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
