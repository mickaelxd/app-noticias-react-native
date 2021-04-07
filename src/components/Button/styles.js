import styled, { css } from 'styled-components';

export const Container = styled.TouchableOpacity`
  background: #8b014d;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 42px;
  margin: 10px;
  border-radius: 14px;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-right: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
`;
