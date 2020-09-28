import React from 'react';

import { render } from '@testing-library/react';

import Day from '../Day';

describe('components/Calendar', () => {
  it('/Day', () => {
    const dayProps = {
      // eslint-disable-next-line
      onChangeDate: (date: string) => {},
      isActiveMonth: true,
      date: '2020-05-5',
      choosenDate: '2020-05-7',
      day: 5,
    };

    const { container, rerender } = render(<Day {...dayProps} />);
    expect(container).toMatchSnapshot();

    rerender(<Day {...dayProps} isToday />);
    expect(container).toMatchSnapshot();

    rerender(<Day {...dayProps} isToday loading />);
    expect(container).toMatchSnapshot();

    rerender(<Day {...dayProps} isToday loading choosenDate={dayProps.date} />);
    expect(container).toMatchSnapshot();
  });
});
