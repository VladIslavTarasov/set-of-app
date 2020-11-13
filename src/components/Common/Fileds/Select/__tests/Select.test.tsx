import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Select from '..';

describe('components/Select', () => {
  it('show/hide options by click', () => {
    // eslint-disable-next-line
    window.HTMLElement.prototype.scrollIntoView = function () {};

    const selectProps = {
      value: '1',
      options: [
        { value: '1', title: '1' },
        { value: '2', title: '2' },
      ],
      // eslint-disable-next-line
      onChange: (value: string) => {},
    };

    const { container, getByText } = render(<Select {...selectProps} />);

    expect(getByText(selectProps.value)).toBeInTheDocument();
    expect(container.querySelectorAll('[role="option"]').length).toBe(0);
    expect(container).toMatchSnapshot();

    fireEvent.click(getByText(selectProps.value));
    expect(container.querySelectorAll('[role="option"]').length).toBe(selectProps.options.length);
    expect(container).toMatchSnapshot();

    fireEvent.click(document);
    expect(container.querySelectorAll('[role="option"]').length).toBe(0);
    expect(container).toMatchSnapshot();
  });
});
