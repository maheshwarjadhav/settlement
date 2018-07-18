import React, {Component} from 'react';
import {connect} from 'react-redux';
class Error extends Component {
    render() {
        return (
           <pre style={{color:'red'}}>{this.props.error}</pre>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.reducerMock.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
