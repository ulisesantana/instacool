import styled from "styled-components";
import React, {ReactElement} from 'react'
import {Column, Row} from "../atomics";
import {CanBeUndefined} from "../../types";

const Container = styled.div`
  padding: 10px 0;
  
  input {
    margin-right: 5px;
  }
  
  label {
    font-weight: bold;
    padding: 10px 0;
  }
`;

export function withLabel<Props>(label: CanBeUndefined<string>, Component: ReactElement<Props>): ReactElement<Props> {
  return (() => (
    <Container>
      {!!label && <label>{label}</label>}
      <Row>
        <Column>
          {Component}
        </Column>
      </Row>
    </Container>
  ))();
}

export default withLabel
