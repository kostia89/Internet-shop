import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import {expect, jest, test} from '@jest/globals';

describe('Button component', () => {
  let handleClickMock;

  beforeEach(() => {
    handleClickMock = jest.fn();
  });

  it('should render a button element with the provided text', () => {
    const { getByRole } = render(
      <Button 
        text="Click me"
        className="my-button"
        hendleClick={handleClickMock}
      />
    );

    expect(getByRole('button')).toHaveTextContent('Click me');
  });

  it('should have the provided className', () => {
    const { getByRole } = render(
      <Button 
        text="Click me"
        className="my-button"
        hendleClick={handleClickMock}
      />
    );

    expect(getByRole('button')).toHaveClass('my-button');
  });

  it('should call handleClick when clicked', () => {
    const { getByRole } = render(
      <Button 
        text="Click me"
        className="my-button"
        hendleClick={handleClickMock}
      />
    );

    fireEvent.click(getByRole('button'));
    expect(handleClickMock).toHaveBeenCalled();
  });
});