import React from "react";

// @Styles
import { StyledCard, StyledCardBody, StyledCardHeader } from "./Card.styles";

type CardProps = {
  children: React.ReactNode;
  noPadding?: boolean;
  className?: string;
};

const Card = ({
  children,
  noPadding = false,
  className = "card",
}: CardProps) => {
  return (
    <StyledCard className={className} noPadding={noPadding}>
      {children}
    </StyledCard>
  );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <StyledCardHeader>{children}</StyledCardHeader>;
};

export const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <StyledCardBody>{children}</StyledCardBody>;
};

export default Card;
