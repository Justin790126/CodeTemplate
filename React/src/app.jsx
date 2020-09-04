import React from 'react'
import {
    connect
} from 'react-redux'
import {
  templateAction
} from 'root/actions'


// presentional componet
class App extends React.Component {
    render() {
        logger(this.props)
        return (
            <h1>Redux Shopping Cart!</h1>
        )
    }
}

// container component
function mapStateToProps(state) {
    return {
      value: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      template: templateAction,
      dispatch,
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);