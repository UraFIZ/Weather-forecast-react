import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.props.data}
                    width={500}
                    height={300}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}
export default Chart
