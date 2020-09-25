import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { getDevelopersData } from '../state/DevelopersData';

const editIcon = require('../assets/images/edit.svg');
const deleteIcon = require('../assets/images/delete.svg');

/**
 * This the ItemList page
 */
const ItemList = () => {
  const dispatch = useDispatch();

  const developersData = useSelector(getDevelopersData);

  const deleteData = ( id ) => {
    const confirm = window.confirm('Are you sure want to delete?');
    if(confirm){
      dispatch({ type: 'DELETE_DEVELOPERSDATA', payload: {id} });
    }
  }

  if(!developersData?.length){
    return false;
  }
  
  return (
    <Row>
        {
        developersData.map((item)=>{
            var trimmedString = item?.desc?.substr(0, 135) || '';
            //re-trim if we are in the middle of a word and 
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            
            return (
                <Col sm={6} md={4} key={`item-${item.id}`}>
                    <ItemBlock>
                        <ItemHead>
                            <ItemLogo>
                                <Image src={item.logo} />
                            </ItemLogo>
                            <ItemDetail>
                                <h2>{item.title}</h2>
                                <NumberDes>
                                    <b>{item.totalExp}</b>
                                    Years Exp.
                                </NumberDes>
                                <NumberDes className="right">
                                    <b>{item.totalProjects}</b>
                                    Projects
                                </NumberDes>
                            </ItemDetail>
                        </ItemHead>
                        <p>{trimmedString}</p>
                        <ALink>{item.imgTitle}</ALink>
                        <ImageBlock backgroundImage={item.imgURL}>
                            <ImageCaption>
                                <b>{item.imgTitle}</b>
                                {item.location}
                            </ImageCaption>
                        </ImageBlock>
                        <OverlayBlock>
                            <OverlayContent>
                                 <Link to={`item/${item.id}`}><Button><Image src={editIcon} />Edit</Button></Link>
                                <Button onClick={()=>deleteData(item.id)} className="purple"><Image src={deleteIcon} />Delete</Button>
                            </OverlayContent>
                        </OverlayBlock>
                    </ItemBlock>
                </Col>
            )})
        }
    </Row>
    );
};

export default ItemList;

export const OverlayBlock = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -100%;
  transition: 0.3s all;
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  a{
    text-decoration: none;
  }
  button{
      display: block;
      width: 100px;
      border-radius: 30px;
      background: #FFF;
      color: #333;
      border: none;
      margin: 9px 0;
      text-transform: uppercase;
      font-size: 14px;
      white-space: nowrap;
      text-align: left;
      padding: 5px 7px;
      font-size: 13px;
      &:hover{
          background: #754fde;
      }
      img{
        width: 22px;
        background: #478ae1;
        padding: 4px;
        border-radius: 50%;
        margin-right: 7px;
      }
      &:hover{
        background: #478ae1;
          img{
            background: #754fde;
          }
      }
      &.purple{
        img{
          background: #754fde;
        }
        &:hover{
          background: #754fde;
          img{
            background: #478ae1;
          }
        }
        
      }
  }
`;

export const ItemBlock = styled.div`
  border: 1px solid #CCC;
  border-top: 4px solid #754fde;
  border-radius: 3px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  &:hover ${OverlayBlock} {
    bottom: 0;
  }
`;

export const ImageBlock = styled.div`
  background: none center center;
  background-size: cover;
  ${(props) => props.backgroundImage && `background-image: url(${props.backgroundImage});`}
  height: 200px;
  position: relative;
  &:before{
      content: '';
      display: block;
      background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      top:0;
      bottom 0;
  }
  img{
      width: 100%;
  }
`;

export const ImageCaption = styled.div`
  position: absolute;
  padding: 10px;
  bottom: 0;
  color: #FFF;
  font-size: 13px;
  b{
      display: block;
  }
`;

export const ItemHead = styled.div`
  overflow: hidden;
  margin-bottom: 15px;
`;
export const ItemLogo = styled.div`
  float: left;
  width: 100px;
  border: 1px solid #CCC;
  padding: 4px;
  border-radius: 2px;
  text-align: center;
  img{
      max-width: 100%;
      max-height: 70px;
  }
  @media (max-width: 960px) {
    max-width: 30%;
  }
`;
export const ItemDetail = styled.div`
  margin-left: 120px;
  h2{
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  @media (max-width: 960px) {
    margin-left: 35%;
  }
`;
export const NumberDes = styled.div`
  float: left;
  &.right{
    float: right;
  }
  b{
      display: block;
  }
`;

export const ALink = styled.div`
  color: #754fde;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 15px;
`;