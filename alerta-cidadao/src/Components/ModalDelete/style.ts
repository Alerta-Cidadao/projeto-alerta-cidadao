import styled from "styled-components";

export const ModalDeleteDiv = styled.div`
  z-index: 20; 
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  background-color: black;
  opacity: 1;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 20px;
 padding: 20px;
`

export const ModalDeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalDeleteText = styled.p `
color: white;
font-size: 24px;
`

export const ModalDeleteBtnDelete = styled.button `
border-radius: 5px;
background-color: #8C251C;
width: 150px;
height: 40px;
color: white;
`