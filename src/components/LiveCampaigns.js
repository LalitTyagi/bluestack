import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { updateData } from "../action/action";

import { connect } from "react-redux";

import calendar from "../img/calendar.png";
import file from "../img/file.png";
import Price from "../img/Price.png";
import statisticsReport from "../img/statisticsReport.png";

class LiveCampaigns extends Component {
    state = {
        liveCampaignState: this.props.data,
        startDate: new Date(),
        oldDate:'',
        scheduleDate: -1
    }

    handleScheduleDate = (j, createdOn) => {
        this.setState({
            scheduleDate: j,
            startDate: new Date(createdOn),
            oldDate: new Date(createdOn)
        })
    }

    handleSelect = date =>{
        this.setState({
            startDate: date,
            scheduleDate: -1
        },()=>{
            this.props.dispatch(
                updateData(
                    Math.floor(this.state.oldDate),
                    Math.floor(this.state.startDate)
                )
            );
        })
    }
render() {
    return (
        <table>
        <thead>
            <tr>
                <th scope="col">DATE</th>
                <th scope="col">CAMPAIGN</th>
                <th scope="col">VIEW</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {this.state.liveCampaignState.map((i,j)=>
            <tr key={j}>
            <td data-label="Period">
                <span className="td1-date">{i.date}</span>
                <br />
                <span className="td1-datelast">{i.DifferenceInDays} Days Ago</span>
            </td>
            <td data-label="Account">
                <img src={i.image_url} alt={i.name} className="img-th2-1" />
                <span className="td1-campaign1">{i.name}</span>
                <span className="td1-campaign2">US</span></td>
            <td data-label="Due Date">
                <img src={Price} alt="Price" className="img-th3-1" />
                <span className="view-td1">View Pricing</span>
            </td>
            <td data-label="Amount">
                <span className="amount1">
                    <img src={file} alt="file" className="img-action1" />
                    <span className="action-text1">CSV</span>
                </span>
                <span className="amount2">
                    <img src={statisticsReport} alt="statisticsReport" className="img-action2" />
                    <span className="action-text2">Report</span>
                </span>
                <span className="amount3">
                    <img src={calendar} alt="calendar" className="img-action3" onClick={() => this.handleScheduleDate(j, i.tempDate)} />
                    <span className="action-text3">
                        {this.state.scheduleDate === j && <DatePicker
                            selected={this.state.startDate}
                            onSelect={this.handleSelect} />}
                Schedule Again
        </span>
                </span>
            </td>
        </tr>)}
        </tbody>
    </table>
    );
}
}

const mapStateToProps = state => ({
    data: state.data.item
});
  
export default connect(mapStateToProps)(LiveCampaigns);