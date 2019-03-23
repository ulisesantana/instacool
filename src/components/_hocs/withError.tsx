import styled from "styled-components";
import React, {ReactElement} from 'react'
import {Row} from "../atoms";
import {CanBeUndefined} from "../../types";

const Container = styled.div`
  padding: 5px;
  
   span{
    display: inline;
    margin: 5px;
  }
`;

export function withText<Props>(text: CanBeUndefined<string>, Component: ReactElement<Props>): ReactElement<Props> {
  return (() => (
    <Container>
      <Row wrap>
        {Component}
        <span>{text}</span>
      </Row>
    </Container>
  ))();
}

export default withText
