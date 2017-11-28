import * as React from "react";
import {Bubble} from "react-chartjs-2";
import Point from "../types/Point";
import {ChartOptions} from "chartjs";

interface InterpolationCurveProps {
    points: Point[],
    curvePoints: { [propname: string]: Point[] }
}

export default class InterpolationCurve extends React.Component<InterpolationCurveProps, {}> {

    render() {

        const colors = [
            "red", "green", "blue"
        ];

        const data = {
            labels: ['Interpolation'],
            datasets: Object.keys(this.props.curvePoints).map(key => {
                return {
                    label: key,
                    fill: true,
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
                    data: this.props.curvePoints[key],
                    type: "line",
                    lineTension: 0.3
                }
            })
        };

        return <div style={{width: 800, height: 600}}>
            <Bubble data={data} />
        </div>;
    }

}