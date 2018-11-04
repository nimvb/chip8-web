import React from 'react'; // eslint-disable-line no-unused-vars
import IconButton from '@material-ui/core/IconButton';  // eslint-disable-line no-unused-vars
import Tooltip from '@material-ui/core/Tooltip'; // eslint-disable-line no-unused-vars
import CircularProgress from '@material-ui/core/CircularProgress'; // eslint-disable-line no-unused-vars
import FolderIcon from '@material-ui/icons/Folder'; // eslint-disable-line no-unused-vars
import loadRom from 'chip8/utils/rom.js';


class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };

        this.fileSelectorRef = React.createRef();
        this.handleLoad = this.handleLoad.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    handleLoad() {
        this.fileSelectorRef.current.click();
    }

    handleFileSelected(e) {
        e.preventDefault();

        this.setState({isLoading: true});

        const file = e.target.files[0];
        loadRom(file, this.onLoad);
    }

    onLoad(rom) {
        this.props.onLoad(rom);
        this.setState({isLoading: false});
    }

    render() {
        if (this.state.isLoading) {
            return <CircularProgress color="inherit"/>;
        }
        return (
            <React.Fragment>
                <IconButton onClick={this.handleLoad} color="inherit">
                    <FolderIcon />
                </IconButton>
                <input 
                    type="file" 
                    ref={this.fileSelectorRef} 
                    onChange={this.handleFileSelected}
                    style={{display: 'none'}}/>
            </React.Fragment>
        );
    }
}

export default Loader;
