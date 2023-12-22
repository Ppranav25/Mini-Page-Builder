import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import ListItem from '../ListItem/ListItem';

const listItems = [
{ label: 'Label', type: 'Label' },
{ label: 'Input', type: 'Input' },
{ label: 'Button', type: 'Button' },
];

function SideBar() {
  const [page, setPage] = useState([]);

  return (
    <div>
      <div className={styles.sidebar}>
       <div className={styles.block}>BLOCKS</div>
       <div className={styles.listItem}>
        {
          listItems.map((item)=>{
          return <ListItem  item={item}></ListItem>
          })
        }
       </div>
      </div>
    </div>
  );
}

export default SideBar;