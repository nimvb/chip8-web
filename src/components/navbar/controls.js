import React from 'react'; // eslint-disable-line no-unused-vars
import IconButton from '@material-ui/core/IconButton';  // eslint-disable-line no-unused-vars
import Tooltip from '@material-ui/core/Tooltip'; // eslint-disable-line no-unused-vars
import PlayArrowIcon from '@material-ui/icons/PlayArrow'; // eslint-disable-line no-unused-vars
import PauseIcon from '@material-ui/icons/Pause'; // eslint-disable-line no-unused-vars
import SkipNextIcon from '@material-ui/icons/SkipNext'; // eslint-disable-line no-unused-vars
import StopIcon from '@material-ui/icons/Stop'; // eslint-disable-line no-unused-vars
import Loader from './loader.js'; // eslint-disable-line no-unused-vars

const PlayButton = (props) => (
    <Tooltip title="Run">
        <div>
            <IconButton {...props} color="inherit">
                <PlayArrowIcon />
            </IconButton>
        </div>
    </Tooltip>
);

const PauseButton = (props) => (
    <Tooltip title="Pause">
        <IconButton {...props} color="inherit">
            <PauseIcon />
        </IconButton>
    </Tooltip>
);

const Controls = (props) => {
    const {
        onRun, 
        onPause, 
        onStep,
        onStop, 
        onLoad,
        romLoaded, 
        running
    } = props;
    const playDisabled = !romLoaded;
    const stepDisabled = !romLoaded || running;
    const stopDisabled = !romLoaded;
    const toggleButton = running
        ? <PauseButton onClick={onPause} />
        : <PlayButton disabled={playDisabled} onClick={onRun} />;

    return (
        <React.Fragment>
            {toggleButton}
            <Tooltip title="Step">
                <div>
                    <IconButton onClick={onStep} disabled={stepDisabled} color="inherit">
                        <SkipNextIcon />
                    </IconButton>
                </div>
            </Tooltip>
            <Tooltip title="Stop">
                <div>
                    <IconButton onClick={onStop} disabled={stopDisabled} color="inherit">
                        <StopIcon />
                    </IconButton>
                </div>
            </Tooltip>
            <Loader onLoad={onLoad} />
        </React.Fragment>
    );
};

export default Controls;
