import React, { Component } from 'react';
import { withStyles, Fab, Icon } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import styles from './styles';

class TaskItem extends Component {
  setColor = (status) => {
    let color = '#b3e5fc';
    if (status === 0) {
      color = '#ffccbc';
      return color;
    }
    if (status === 1) {
      color = '#fff9c4';
      return color;
    }
    return color;
  };

  render() {
    const { task, classes, status } = this.props;
    const { title, id } = task;
    return (
      <Card
        style={{ background: this.setColor(task.status) }}
        key={id}
        className={classes.card}
      >
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            size="small"
            color="primary"
            aria-label="Edit"
            className={classes.fab}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            size="small"
            color="secondary"
            aria-label="Delete"
            className={classes.fab}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
