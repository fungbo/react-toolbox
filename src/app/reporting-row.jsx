import React from "react";
import './css/report-table.scss'

class ReportingRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showChildren: {Moh: true}
        };
    }

    static get defaultProps() {
        return {
            name: '',
            values: []
        }
    };

    render() {
        var name = this.props.name;
        var styles = {
            width: '12%',
            textAlign: "left"};

        return (
            <tr className="ReportingRow">
                <td style={styles} onClick={this.handleClick.bind(this, name)}>
                    <i className={this.getClassName(this.props.name)}/> {this.props.name}
                </td>
                {this.props.values.map(function (column, i) {
                    return <td key={i}>{column}</td>;
                })}
            </tr>
        )
    }

    handleClick(name) {
        var showChildren = this.state.showChildren;
        showChildren[name] = !showChildren[name];

        this.setState(showChildren);
        this.props.onClick();
    }

    getClassName(name) {
        if (!this.state.showChildren[name] || this.state.showChildren[name] == undefined) {
            return "glyphicon glyphicon-menu-right"
        }

        return "glyphicon glyphicon-menu-down"
    }
}

export default  ReportingRow;
