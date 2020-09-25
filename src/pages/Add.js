import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import InputControl from '../components/InputControl';

/**
 * This the Add page
 */
const Add = ({history}) => {
  const [logo, saveLogo] = useState('');
  const [title, saveTitle] = useState('');
  const [totalExp, saveTotalExp] = useState('');
  const [totalProjects, saveTotalProjects] = useState('');
  const [desc, saveDesc] = useState('');
  const [imgTitle, saveImgTitle] = useState('');
  const [location, saveLocation] = useState('');
  const [imgURL, saveImgURL] = useState('');
  const [isError, saveIsError] = useState('');

  const dispatch = useDispatch();
  
  // function: create payload data and call dispatch action
  const saveData = (e) =>{
    e.preventDefault();
    saveIsError(false);

    // Fields validation for empty check
    if(logo === '' || title === '' || totalExp === '' || totalProjects === '' || desc === '' || imgTitle === '' || location === '' || imgURL === ''){
        saveIsError(true);
        return false;
    }

    // dispatching action
    const input = {
      logo,
      title,
      totalExp,
      totalProjects,
      desc,
      imgTitle,
      location,
      imgURL,
    }
    dispatch({ type: 'SAVE_DEVELOPERSDATA', payload: input });
    // return to home page
    history.replace({ pathname: '/'})
  }

  return (
    <Container>
        <ItemContainer>
          <SectionTitle><span>Featured</span> Developers</SectionTitle>
          <>
            <InputControl label='Developer Logo Image URL' value={logo} onChange={(e)=> saveLogo(e.target.value)} />
            <InputControl label='Developer name' value={title}  onChange={(e)=> saveTitle(e.target.value)} />
            <InputControl label='Years of experience.' value={totalExp}  onChange={(e)=> saveTotalExp(e.target.value)} />
            <InputControl label='Project count' value={totalProjects}  onChange={(e)=> saveTotalProjects(e.target.value)} />
            <InputControl label='Description' value={desc} type='textarea'  onChange={(e)=> saveDesc(e.target.value)} />
            <InputControl label='Project name' value={imgTitle}  onChange={(e)=> saveImgTitle(e.target.value)} />
            <InputControl label='Project location' value={location}  onChange={(e)=> saveLocation(e.target.value)} />
            <InputControl label='Project image URL' value={imgURL}  onChange={(e)=> saveImgURL(e.target.value)} />
            {isError && <ErrorMsg>All fields are required, please enter value in each field</ErrorMsg>}
            <Button className="gradientBtn" onClick={(e)=>saveData(e)}>Add</Button>
          </>
        </ItemContainer>
    </Container>
  );
};

export default Add;

export const ItemContainer = styled.div`
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
  h1{
      margin: 20px 0;
  }
  label{
      padding: 0 20px;
      margin: 0;
  }
  input, textarea{
      border-radius: 20px;
      background: #EEE;
      padding: 10px 20px;
      resize: none;
      font-size: 13px;
  }
  button{
    width: 100%;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  span{
    color: #777;
  }
`;

export const ErrorMsg = styled.div`
  color: red;
  padding: 0 20px;
`;