import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: () => ({ pending: false }),
}));

describe('Form 컴포넌트', () => {
  const mockOnSubmit = jest.fn(() => Promise.resolve());
  const mockOnCancel = jest.fn();
  const mockOnIsDirtyChange = jest.fn();

  const defaultProps = {
    onSubmit: mockOnSubmit,
    onCancel: mockOnCancel,
    onIsDirtyChange: mockOnIsDirtyChange,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('전달된 data가 없으면 플레이스 홀더 표시', () => {
    render(<Form {...defaultProps} />);
    expect(
      screen.getByPlaceholderText('제목을 입력해주세요')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('내용을 입력해주세요')
    ).toBeInTheDocument();
  });

  it('data prop이 전달되면 해당 데이터로 각 인풋 표시', () => {
    const data = { id: '1', title: '테스트 제목', content: '테스트 내용' };
    render(<Form {...defaultProps} data={data} />);
    expect(screen.getByDisplayValue('테스트 제목')).toBeInTheDocument();
    expect(screen.getByDisplayValue('테스트 내용')).toBeInTheDocument();
  });

  it('제목 입력', async () => {
    render(<Form {...defaultProps} />);
    const titleInput = screen.getByPlaceholderText('제목을 입력해주세요');
    await userEvent.type(titleInput, '새로운 제목');
    expect(titleInput).toHaveValue('새로운 제목');
  });

  it('내용 입력', async () => {
    render(<Form {...defaultProps} />);
    const contentInput = screen.getByPlaceholderText('내용을 입력해주세요');
    await userEvent.type(contentInput, '새로운 내용');
    expect(contentInput).toHaveValue('새로운 내용');
  });

  it('데이터가 변경되면 onIsDirtyChange 함수에 true 전달', async () => {
    const data = { id: '1', title: '초기 제목', content: '초기 내용' };
    render(<Form {...defaultProps} data={data} />);
    const titleInput = screen.getByDisplayValue('초기 제목');

    await userEvent.clear(titleInput);
    await userEvent.type(titleInput, '새로운 제목');

    expect(mockOnIsDirtyChange).toHaveBeenCalledWith(true);
  });

  it('초기 데이터와 동일한 값으로 변경 시 onIsDirtyChang 함수에 false 전달', async () => {
    const data = { id: '1', title: '초기 제목', content: '초기 내용' };
    render(<Form {...defaultProps} data={data} />);
    const titleInput = screen.getByDisplayValue('초기 제목');

    await userEvent.clear(titleInput);
    await userEvent.type(titleInput, '새로운 제목');
    await userEvent.clear(titleInput);
    await userEvent.type(titleInput, '초기 제목');

    expect(mockOnIsDirtyChange).toHaveBeenCalledWith(false);
  });

  it('pending일때 스피너가 표시되는지 확인', async () => {
    jest
      .spyOn(require('react-dom'), 'useFormStatus')
      .mockReturnValue({ pending: true });

    render(<Form {...defaultProps} />);

    const image = screen.getByAltText('circle icon');
    expect(image).toBeInTheDocument();
  });
});
