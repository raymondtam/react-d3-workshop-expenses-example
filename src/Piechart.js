import React, { Component } from "react";
import * as d3 from "d3";

import { groupByFunc } from "./util";
import _Arc from "./Arc";

import connect from "./Connect"

const Arc = connect(_Arc)

class Piechart extends Component {
    pie = d3
        .pie()
        .value(d => d.amount)
        .sortValues(d => d.tag)
        .padAngle(0.005);

    render() {
        const {
            data,
            groupBy,
            x,
            y,
            color,
            selectTag,
            selectedTag
        } = this.props;

        const _data = groupByFunc(data, groupBy);

        return (
            <g transform={`translate(${x}, ${y})`}>
                {this.pie(_data).map((d, i) => (
                    <Arc
                        d={d}
                        color={color(d)}
                        key={d.data.tag}
                        selectTag={selectTag}
                        selected={selectedTag === d.data.tag}
                    />
                ))}
                <text x="0" textAnchor="middle">
                    {data.length}
                </text>
                <text y="18" x="0" textAnchor="middle">
                    datapoints
                </text>
            </g>
        );
    }
}

export default Piechart;
