import React from 'react';
import ReportingRow from './reporting-row.jsx';

class ReportingBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChildren: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <tbody className="ReportingBody">
            <ReportingRow name={this.props.rows.name} values={this.props.rows.values} onClick={this.handleClick}/>
            {this.state.showChildren && this.props.rows.children.map(function (row) {
                return <ReportingRow key={row.name} name={row.name} values={row.values}/>
            })}
            </tbody>
        );
    }

    handleClick() {
        this.setState({
            showChildren: !this.state.showChildren
        })
    }
}

export default ReportingBody;
