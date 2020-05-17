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

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input
          type='text'
          name=''
          id=''
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          name='sortBy'
          id=''
          onChange={e => {
            if (e.target.value == 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value == 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
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

export default connect(mapStateToProps)(ExpenseListFilters);
