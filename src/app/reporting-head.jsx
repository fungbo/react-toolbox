import React from 'react';
import _ from 'lodash';
import './css/report-table.scss'

class ReportingHead extends React.Component {
    render() {
        var spans = this.props.spans;

        var firstLayer = [];
        var secondLayer = [];
        var thirdLayer = [];
        var ocLayer = [];
        _.map(spans, (function (value, key) {
            if (_.split(key, '_').length == 1) {
                firstLayer = _.concat(firstLayer,
                    <th colSpan={value.col} rowSpan={value.row}>
                        {key}
                    </th>)
            } else if (_.split(key, '_').length == 2) {
                secondLayer = _.concat(secondLayer,
                    <th colSpan={value.col} rowSpan={value.row}>
                        {_.split(key, '_')[1]}
                    </th>)
            } else if (_.split(key, '_').length == 3) {
                thirdLayer = _.concat(thirdLayer,
                    <th colSpan={value.col} rowSpan={value.row}>
                        {_.split(key, '_')[2]}
                    </th>)
            }

            if (!value.hasChildren) {
                ocLayer = _.concat(ocLayer, <th>O</th>, <th>C</th>)
            }
        }));

        var maxLayer = thirdLayer.length > 0 ? 4 : secondLayer.length > 0 ? 3 : 2;

        return (
            <thead className="ReportingHead">
            <tr>
                <th rowSpan={maxLayer}>Semana</th>
                {_.forEach(firstLayer, (function (value) {
                    return value
                }))}
            </tr>
            <tr>
                {_.forEach(secondLayer, (function (value) {
                    return value
                }))}
            </tr>
            <tr>
                {_.forEach(thirdLayer, (function (value) {
                    return value
                }))}
            </tr>
            <tr>
                {_.forEach(ocLayer, (function (value) {
                    return value
                }))}
            </tr>
            </thead>
        )
    }
}

export default ReportingHead;
