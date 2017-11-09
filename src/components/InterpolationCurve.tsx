import * as React from "react";
import {Bubble} from "react-chartjs-2";

interface Point {
    x: number;
    y: number;
}

interface InterpolationCurveProps {
    points: Point[],
    curvePoints: Point[]
}

export default class InterpolationCurve extends React.Component<InterpolationCurveProps, {}> {

    render() {

        const data = {
            labels: ['Interpolation'],
            datasets: [
                {
                    label: 'Regression points',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.points.map(p => ({ x: p.x , y: p.y, r: 5 }))
                },
                {
                    label: 'Regression curve',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.curvePoints,
                    type: "line"
                }

            ]
        };

        return <div style={{width: 500, height: 500}}>
            <Bubble data={data} height={300} />
        </div>;
    }

}