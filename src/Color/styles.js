import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: auto;
`;

export const ColorDiv = styled.label.attrs((props) => ({
  style: {
    background: props.name,
  },
}))`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  ${(props) =>
    !props.readOnly &&
    css`
      background-color: transparent;
      border: 1px solid #f2f2f2;
    `}

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    ${(props) =>
      props.readOnly
        ? css`
            display: none;
          `
        : css`
            display: block;
          `};

    &:-webkit-color-swatch-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  p {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
`;
