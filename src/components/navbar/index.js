import React from 'react'; // eslint-disable-line no-unused-vars
import AppBar from '@material-ui/core/AppBar'; // eslint-disable-line no-unused-vars
import Toolbar from '@material-ui/core/Toolbar'; // eslint-disable-line no-unused-vars
import Typography from '@material-ui/core/Typography'; // eslint-disable-line no-unused-vars
import Controls from './controls.js'; // eslint-disable-line no-unused-vars
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
};

const Navbar = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Chip8
                    </Typography>
                    <Controls {...props}/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Navbar);


