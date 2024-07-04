// @Styles
import styled from "@emotion/styled";

export const PlusButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text()};
  background-color: transparent;
  height: calc(100% - 2px);
  border: none;
  cursor: pointer;
  border-left: 1px solid
    ${({ theme }) => theme.palette.cardBackground("contrast")};
  border-right: 1px solid
    ${({ theme }) => theme.palette.cardBackground("contrast")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const MinusButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.cardBackground()};
  color: ${({ theme }) => theme.palette.text()};
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const ButtonWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(calc(0% - 2px), -50%);
  height: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const NumericInputWrapper = styled.div<{ disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 25px;

  input[type="number"] {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.palette.text()};
    background-color: ${({ theme }) => theme.palette.cardBackground()};
    border: 1px solid ${({ theme }) => theme.palette.cardBackground("contrast")};
    border-radius: 4px;
    padding: 4px;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }

  //remove native arrows from input
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
