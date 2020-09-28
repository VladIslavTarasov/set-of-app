export type CalendarDay = {
  readonly day: number;
  readonly date: string;
  readonly isActiveMonth: boolean;
  readonly action?: 'next' | 'prev';
};

export type State = {
  readonly currentMonth: string[];
  readonly currentDay: string;
  readonly calendar: CalendarDay[][];
};

export const NEXT_MONTH = 'CALENDAR/NEXT_MONTH';

export type NextMonthAction = {
  type: typeof NEXT_MONTH;
};

export type NextMonthActionCreator = () => NextMonthAction;

export const PREV_MONTH = 'CALENDAR/PREV_MONTH';

export type PrevMonthAction = {
  type: typeof PREV_MONTH;
};

export type PrevMonthActionCreator = () => PrevMonthAction;

export const CHANGE_DATE = 'CALENDAR/CHANGE_DATE';

export type ChangeDateAction = {
  type: typeof CHANGE_DATE;
  payload: string;
};

export type ChangeDateActionCreator = (year: string) => ChangeDateAction;

export type Actions = NextMonthAction | PrevMonthAction | ChangeDateAction;
