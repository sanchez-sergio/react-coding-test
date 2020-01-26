import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Table from "../../components/Table";
import { withTableData } from "../../data/withTableData";
import { tableShape } from "../../types";

class TableView extends Component {
  static propTypes = {
    table: tableShape.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { table } = this.props;

    return (
      <div className="App">
        <Table table={table} />
      </div>
    );
  }
}

export default compose(
  withRouter,
  withTableData
)(TableView);
