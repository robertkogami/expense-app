import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDateChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value == 'date') {
      this.props.sortByDate();
    } else if (e.target.value == 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div>
        <input
          type='text'
          name=''
          id=''
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          name='sortBy'
          id=''
          onChange={this.onSortChange}
          value={this.props.filters.sortBy}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId='startDate'
          endDate={this.props.filters.endDate}
          endDateId='endDate'
          onDatesChange={this.onDateChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
