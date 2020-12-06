import React, { Component } from "react";
import './CalendarImpl.css';
import YMap from './yandexMap/YMap';


class CalendarImpl extends Component {
    constructor(props){
        super(props);
        this.state = {
            focusDate: null,
            dates: [],
            date: null
        }
    }

    // async function get request
    async componentDidMount(){
        const response = await fetch("http://52.15.137.0:8080/api/geo/dates");
        if(response.ok){
            const dates = await response.json();
            this.setState({dates});
        }else {
            console.log("Error while fetch data from an api");
        }
    }

    renderDates = () => {
        return this.state.dates.map(f => {
            return <option key={Math.random()} value={f}>{f}</option>
        })
    }

    clickHandler = () => {
        const date = this.state.focusDate;
        this.setState({date});
    }

    onChange = f => {
        const focusDate = f.target.value;
        this.setState({focusDate});
    }

    render() {
        return(
            <div>
                <YMap date={this.state.date}/>
                <div>
                    <select onChange={this.onChange}>
                        <option value="">{this.state.focusDate === null ? 'Все Объекты' : this.state.focusDate}</option>
                        {this.renderDates()}
                    </select>
                    <button onClick={this.clickHandler}>Вывести точки</button>
                </div>
            </div>
        )
    }
} export default CalendarImpl;


