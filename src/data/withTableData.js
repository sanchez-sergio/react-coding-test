import React from "react";

const API = "https://storage.googleapis.com/replaypoker-dummy-api/tables";

export function withTableData(Component) {
  return class WithTableData extends React.Component {
    state = {
      table: {},
      loadingTable: true,
      errorLoadingTable: null
    };

    componentDidMount() {
      const tableId = this.props.match.params.tableId;

      fetch(`${API}/${tableId}.json`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("An error occurred while fetching the table data");
          }
        })
        .then(data => this.setState({ table: data, loadingTable: false }))
        .catch(error =>
          this.setState({ errorLoadingTable: error, loadinTable: false })
        );
    }

    render() {
      const { table, loadingTable, errorLoadingTable } = this.state;

      if (errorLoadingTable) {
        return <p>{errorLoadingTable.message}</p>;
      }

      if (loadingTable) {
        return <p>Loading...</p>;
      }

      const props = {
        table,
        ...this.props
      };
      return <Component {...props} />;
    }
  };
}
