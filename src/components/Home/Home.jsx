import React, { useEffect } from 'react';
import SideBar from '../Sidebar/Sidebar';
import styles from './Home.module.css';
import DragArea from '../DragArea/DragArea';
import { useDispatch, useSelector } from 'react-redux';
import ModalUse from '../ModalUse/ModalUse';
import { addAllTexts } from '../../redux/action';



function Home() {
  const selector= useSelector(state=>state.modalState)
  const data=useSelector(state=>state.allTexts)
  const isModalOpen= selector.isModalOpen
  const dispatch= useDispatch();
  useEffect(() => {
     function fetchData(){
      const data= localStorage.getItem("data");
      if(data){
        const filterData= JSON.parse(data)
        dispatch(addAllTexts(filterData));
      }
    }
    fetchData()
    
    
  },[dispatch]);
  return (
    <div>
        <div className={styles.pageBuilder}></div>
      <div>
        <DragArea selector={data}></DragArea>
        <SideBar></SideBar>
        {isModalOpen && <ModalUse  modalData={selector}></ModalUse>}
      </div>
    </div>
  );
}

export default Home;