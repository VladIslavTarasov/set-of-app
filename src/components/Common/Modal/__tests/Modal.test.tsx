import React from 'react';

import { render } from '@testing-library/react';

import Modal from '../Modal';

describe('components/Modal', () => {
  it('render with title', () => {
    const { getByTestId } = render(<Modal title="Title" />);
    expect(document.body.contains(getByTestId('modal'))).toBeTruthy();
    expect(getByTestId('modal')).toMatchSnapshot();
  });

  it('render with description', () => {
    const { getByTestId, rerender } = render(<Modal description="description" />);
    expect(document.body.contains(getByTestId('modal'))).toBeTruthy();
    expect(getByTestId('modal')).toMatchSnapshot();

    rerender(<Modal description={['description1', 'description2', 'description3']} />);
    expect(document.body.contains(getByTestId('modal'))).toBeTruthy();
    expect(getByTestId('modal')).toMatchSnapshot();
  });

  it('render with button', () => {
    // eslint-disable-next-line
    const { getByTestId } = render(<Modal onClose={() => {}} />);
    expect(document.body.contains(getByTestId('modal'))).toBeTruthy();
    expect(getByTestId('modal')).toMatchSnapshot();
  });

  it('render with children', () => {
    const { getByTestId } = render(
      <Modal>
        <h5>Title</h5>
        <p>Description</p>
        <button type="button">Close</button>
      </Modal>
    );
    expect(document.body.contains(getByTestId('modal'))).toBeTruthy();
    expect(getByTestId('modal')).toMatchSnapshot();
  });
});
