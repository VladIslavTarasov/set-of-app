import { createContext } from 'react';

import * as calendarTypes from 'store/calendar/calendar.types';

export const CalendarDispatch = createContext<Function | React.Dispatch<calendarTypes.Actions>>(
  () => ({})
);
