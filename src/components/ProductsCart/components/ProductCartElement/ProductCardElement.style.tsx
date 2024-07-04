import styled from "@emotion/styled";

const ProductCartElementWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const ProductCartElementImage = styled.img`
  height: 130px;
  object-fit: cover;
`;

const ProductCartElementContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

const ProductCartTitleAndTotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductCartStockAndPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

const ProductCartQuantityAndRemove = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductCartElementSeparator = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.black("100")};
`;

export {
  ProductCartElementWrapper,
  ProductCartElementImage,
  ProductCartElementContent,
  ProductCartTitleAndTotalPrice,
  ProductCartStockAndPrice,
  ProductCartQuantityAndRemove,
  ProductCartElementSeparator,
};
