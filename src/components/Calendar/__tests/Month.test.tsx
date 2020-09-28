import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import calendar from 'store/calendar/__tests/stubs';

import Month from '../Month';

describe('components/Calendar', () => {
  it('/Month', () => {
    const monthProps = {
      // eslint-disable-next-line
      onChangeDate: (date: string) => {},
      calendar: calendar['2020-05'],
      currentDate: '2020-05-5',
      dates: ['2020-05-5'],
    };

    const { container, rerender, getByTitle } = render(<Month {...monthProps} />);
    expect(container.querySelectorAll('.hasTask').length).toBe(monthProps.dates.length);
    expect(container).toMatchSnapshot();

    rerender(<Month {...monthProps} dates={['2020-05-6', '2020-05-8', '2020-05-11']} />);
    expect(container.querySelectorAll('.hasTask').length).toBe(3);
    expect(container.querySelector('.choosen')?.textContent).toBe('5');

    fireEvent.click(getByTitle('2020-05-14'));
    expect(container.querySelector('.choosen')?.textContent).toBe('14');
    expect(container).toMatchSnapshot();
  });
});
