import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${props => (props.marginTop ? props.marginTop : '16px')};

  ${props =>
    props.marginRight &&
    css`
      margin-right: ${props.marginRight};
    `};

  ${props =>
    props.marginLeft &&
    css`
      margin-left: ${props.marginLeft};
    `};

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `};

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${props =>
    props.expand &&
    css`
      flex: 1;
    `};
`;

export const ContainerInput = styled.TextInput.attrs({
  textAlignVertical: 'top',
})`
  border: 1px solid black;
  border-radius: 5px;
  height: 41px;

  ${({ multiline }) =>
    multiline &&
    css`
      height: 82px;
      text-align: left;
    `};
`;
