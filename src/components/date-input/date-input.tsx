import styled from '@emotion/styled';

interface DateInputProps {
  placeholder?: string;
  value: string;
  onChange: (date: string) => void;
}

export default function DateInput({
  placeholder,
  value,
  onChange,
}: DateInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    onChange(date.toISOString().split('T')[0]);
  };

  return (
    <InputWrapper>
      <Input
        type="date"
        data-placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4.4rem;
  padding: 1rem 2rem;
  border: 0.1rem solid #c4c4c4;
  border-radius: 0.8rem;

  &:focus-within {
    border: 0.1rem solid #3478f6;
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.4rem;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  color: #6d6d6d;
  border: none;

  &[type='date'] {
    background: url('/images/calendar-check.png') no-repeat right 2rem center;
  }

  &[type='date']::-webkit-clear-button,
  &[type='date']::-webkit-inner-spin-button {
    display: none;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }

  &[type='date']::before {
    content: attr(data-placeholder);
    width: 100%;
  }

  &[type='date']:valid::before {
    display: none;
  }

  &[type='date']:valid {
    word-spacing: -1rem;
  }

  &[type='date']::before {
    color: #c4c4c4;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;
