import React from 'react';
import styles from './ListItem.module.css'
import gripVertical from "../../assets/gripVertical.svg"
import { useDispatch } from 'react-redux';
import { setModalState } from '../../redux/action.js';
function ListItem({ item }) {

  const dispatch= useDispatch();

  const handleDragEnd = (event) => {
    event.target.style.opacity=1;
    event.target.classList.add("listItem")
    const dataToTransfer={ X: event.clientX, Y: event.clientY, type: item.type,isModalOpen:true}
    dispatch(setModalState(dataToTransfer))

  };
  return (
    <div>
    
       <div className={styles.listItem}   draggable
       onDragEnd={handleDragEnd}
       >
        <div className={styles.grip}>
        <img src={gripVertical}  alt="logo"/>
        </div>
  
        <div className={styles.label}
        >{item.label}</div>
       </div>
    </div>
  );
}

export default ListItem;