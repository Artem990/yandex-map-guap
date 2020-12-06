import './ControlPanel.css';
import React,{Component} from 'react';
import CalendarImpl from './calendar/CalendarImpl';


export class ControlPanel extends Component {
    render () {
        return(
            <div className="body">
                <CalendarImpl/>
            </div>
        )
    }
}