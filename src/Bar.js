import React, { Component } from "react";
import * as d3 from "d3";

class Bar extends Component {
    render() {
        const { x, y, width, height, selected, color, d, onMouseOver, onMouseOut } = this.props;

        return (
            <rect
                key={d.tag}
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: selected ? color(d).saturate(2) : color(d)
                }}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            />
        );
    }
}

export default Bar;
