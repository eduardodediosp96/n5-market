import { ChangeEvent } from "react";

// @Styles
import {
  ButtonWrapper,
  MinusButton,
  NumericInputWrapper,
  PlusButton,
} from "./NumericInput.styles";

interface NumericInputProps {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

const NumericInput = ({
  value = 0,
  onValueChange = (_number) => {},
  min = 0,
  max = 100,
  disabled = false,
}: NumericInputProps) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(e.target.value));
  };

  return (
    <NumericInputWrapper disabled={disabled}>
      <input
        type="number"
        value={value}
        onChange={handleValueChange}
        min={min}
        max={max}
        disabled={disabled}
      />
      <ButtonWrapper disabled={disabled}>
        <PlusButton
          disabled={value >= max}
          tabIndex={-1}
          onClick={() => onValueChange(value + 1)}
        >
          +
        </PlusButton>
        <MinusButton
          disabled={value <= min}
          tabIndex={-1}
          onClick={() => onValueChange(value - 1)}
        >
          -
        </MinusButton>
      </ButtonWrapper>
    </NumericInputWrapper>
  );
};

export default NumericInput;