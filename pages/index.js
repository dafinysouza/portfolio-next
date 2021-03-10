import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/commons/Header';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Header />
  );
}
