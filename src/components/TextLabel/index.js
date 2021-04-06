import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextLabel = styled.Text`
  ${({ flex }) => (flex ? `flex: ${flex};` : '')};
  ${({ width }) => (width ? `width: ${width};` : '')};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ type }) => type ?? 'normal'};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  padding-top: ${({ paddingTop }) => `${paddingTop}px`};
  padding-right: ${({ paddingRight }) => `${paddingRight}px`};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}px`};
  ${({ textTransform }) =>
    textTransform ? `text-transform: ${textTransform};` : ''};
  ${({ textDecorationLine }) =>
    textDecorationLine ? `text-decoration-line: ${textDecorationLine};` : ''};
`;

TextLabel.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  marginTop: PropTypes.number,
  marginLeft: PropTypes.number,
  marginBottom: PropTypes.number,
  marginRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingRight: PropTypes.number,
  letterSpacing: PropTypes.number,
  textDecorationLine: PropTypes.string,
  textTransform: PropTypes.string,
  type: PropTypes.oneOf(['bold', 'normal']),
};

TextLabel.defaultProps = {
  fontSize: 14,
  textAlign: 'left',
  type: 'normal',
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  paddingTop: 0,
  paddingLeft: 0,
  paddingBottom: 0,
  paddingRight: 0,
  letterSpacing: 0,
  borderBottomWidth: 0,
};

export default TextLabel;
