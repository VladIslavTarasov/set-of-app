import React from 'react';

import { render } from '@testing-library/react';

import Modal from '..';

describe('components/Modal', () => {
  it('render with title', () => {
    const { container } = render(<Modal title="Title" />);
    expect(container).toMatchSnapshot();
  });

  it('render with description', () => {
    const { container, rerender } = render(<Modal description="description" />);
    expect(container.querySelectorAll('p.text').length).toBe(1);
    expect(container).toMatchSnapshot();

    rerender(<Modal description={['description1', 'description2', 'description3']} />);
    expect(container.querySelectorAll('p.text').length).toBe(3);
    expect(container).toMatchSnapshot();
  });

  it('render with button', () => {
    // eslint-disable-next-line
    const { container } = render(<Modal onClose={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('render with children', () => {
    const { container } = render(
      <Modal>
        <h5>Title</h5>
        <p>Description</p>
        <button type="button">Close</button>
      </Modal>
    );
    expect(container).toMatchSnapshot();
  });
});
