import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Table from '../../components/Table';

import table from '../../data/table-1';
import TableView from '../../views/TableView/TableView';

describe('TableView', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={['/table/2']}>
        <TableView />
      </MemoryRouter>,
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('renders the Loading message', () => {
    const initialState = {
      table: {},
      loadingTable: true,
      errorLoadingTable: null,
    };

    component.find('WithTableData').setState(initialState);
    expect(component.find('WithTableData').html()).toEqual('<p>Loading...</p>');
  });

  it('renders the Error message', () => {
    const initialState = {
      table: {},
      loadingTable: false,
      errorLoadingTable: { message: 'There was an error while fetching data' },
    };

    component.find('WithTableData').setState(initialState);
    expect(component.find('WithTableData').html()).toEqual('<p>There was an error while fetching data</p>');
  });

  it('renders the Table', () => {
    const initialState = {
      table,
      loadingTable: false,
      errorLoadingTable: null,
    };

    component.find('WithTableData').setState(initialState);
    expect(component.find(Table).length).toEqual(1);
  });
});
