import moment from 'moment';

import { getCalendarData, updateCalendar } from './__helpers';
import * as calendarTypes from './calendar.types';

const localMoment: moment.Moment = moment();

export const initial: calendarTypes.State = {
  currentMonth: [localMoment.format('YYYY MMMM'), localMoment.format('YYYY-MM')],
  currentDay: localMoment.format('YYYY-MM-D'),
  calendar: getCalendarData(),
};

const calendarReducer = (
  state: calendarTypes.State,
  action: calendarTypes.Actions
): calendarTypes.State => {
  switch (action.type) {
    case calendarTypes.NEXT_MONTH:
      return { ...state, ...updateCalendar(state.currentMonth[0], 'next') };
    case calendarTypes.PREV_MONTH:
      return { ...state, ...updateCalendar(state.currentMonth[0], 'prev') };
    case calendarTypes.CHANGE_DATE:
      return {
        ...state,
        ...updateCalendar(action.payload, 'byDate'),
      };

    default:
      return state;
  }
};

export default calendarReducer;
