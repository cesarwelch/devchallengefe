import React, { useState } from "react";
import MaterialTable from 'material-table'

export default function(props) {
  return (
   <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
          	{ title: 'Expense', field: 'expense'},
          	{ title: 'Type', field: 'type'},
          	{ title: 'Amount', field: 'amount', type: 'numeric'}
          ]}
          data={props.data}
          title="Expense Tracker"
        />
      </div>
  );
}
