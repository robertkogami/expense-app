import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = props => {
  return (
    <div>
      <input
        type='text'
        name=''
        id=''
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        name='sortBy'
        id=''
        onChange={e => {
          if (e.target.value == 'date') {
            props.dispatch(sortByDate());
          } else if (e.target.value == 'amount') {
            props.dispatch(sortByAmount());
          }
        }}
        value={props.filters.sortBy}
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
