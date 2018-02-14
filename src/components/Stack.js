import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import Card from './Card'


class Stack extends Component{
    render(){

        return (
            <div>
                <Link to='/' className='link-home' > <h4>Home</h4></Link>
                <h3>{this.props.stack.title}</h3>
                <br />
                { this.props.stack.cards === undefined ? <Redirect to='/'/> :
                    this.props.stack.cards.map(card => {
                        return (
                                <Card key={card.id} card={card} />
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        stack: state.stack
    }
}


export default connect(mapStateToProps)(Stack)