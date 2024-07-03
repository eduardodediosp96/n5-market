import styled from "@emotion/styled";

export const MarketButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MarketButtonText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.primary()};
`;
