import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import ItemList from '../components/ItemList';

/**
 * This the Home page
 */
const Home = () => {
  return (
    <Container>
        <SectionHeader>
            <LeftTitle>
                <SectionTitle><span>Featured</span> Developers</SectionTitle>
                <SubTitle>Prominent developers in Banglore</SubTitle>
            </LeftTitle>
            <Link to='add'><Button className="gradientBtn">+ Add New Developer</Button></Link>
        </SectionHeader>
        <PageContainer>
            <ItemList />
        </PageContainer>
    </Container>
  );
};

export default Home;

export const SectionHeader = styled.div`
  padding: 20px 0;
  button{
      float: right;
  }
  overflow: hidden;
`;

export const LeftTitle = styled.div`
  float: left
`;

export const SectionTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  span{
    color: #777;
  }
`;

export const SubTitle = styled.div`
  font-size: 12px;
`;

export const PageContainer = styled.div`
  padding: 0;
`;


export const PageFooter = styled.div`
 text-align: center;
 padding: 10px 0;
`;