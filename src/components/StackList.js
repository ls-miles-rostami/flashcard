import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setStack, loadStack} from '../actions'
import stacks from '../data/stacks.json'

class StackList extends Component {

    componentDidMount(){
        if(this.props.stacks.length === 0){
            this.props.loadStack(stacks)
        }
    }

    render(){
        return(
            <div>
                {this.props.stacks.map(stack => {
                    return (
                        <Link to='/stack'
                        onClick={() => this.props.setStack(stack)}
                        key={stack.id}
                        >
                            <h4>{stack.title}</h4>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stacks: state.stacks
    }
}

export default connect(mapStateToProps, {setStack, loadStack})(StackList);