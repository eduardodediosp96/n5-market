import styled from "@emotion/styled";

export const ProductCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.cardBackground()};
  border-radius: 10px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(props) => props.theme.spacing(1)};
`;

export const ProductImage = styled.div<{ src: string; disabled: boolean }>`
  width: 100%;
  height: 277px;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
