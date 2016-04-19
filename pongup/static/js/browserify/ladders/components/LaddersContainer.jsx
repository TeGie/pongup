import * as actions from '../actions'
// import classNames from 'classnames'
import { LaddersList } from './LaddersList'
import React, { Component } from 'react'

export class LaddersContainer extends Component {
    constructor(props) {
        //explicit call to super must remain because of es7 weirdness and class property usage below
        super(props);

    }

    loading() {
        return (
            <div className="infinite-list-item" style={{textAlign: "center"}}>
                <h4>Loading...</h4>
                <br/>
                <img src="/static/img/loading.gif" style={{width: "50px"}} />
            </div>
        )
    }

    componentDidMount() {
        var self = this
        self.props.dispatch(actions.loadLadders())
    }

    buildLadderList() {
        var self = this
        return self.props.ladders.map(function(ladder, index) {
            return (
                <LaddersList
                    key={index}
                    id={ladder.id}
                    name={ladder.name}
                    {...self.props}
                />
            )
        })
    }

    getLadders() {
        var all_ladders = self.props.ladders.map(
            (ladder)=>{ return (ladder.id) }
        )
    }

    render() {
        var self = this
        var all_ladders = self.props.ladders.map(
                    (ladder)=>{ return (ladder.id) }
                )
        // console.log('all_ladders')
        // console.log(all_ladders)

        return (
            <div>
                {!self.props.is_loading ? this.props.children : self.loading()}
            </div>
        )
    }
}