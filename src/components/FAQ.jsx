import React, { useState } from 'react';
import style from './faq.module.css';


const FAQ = ({item}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
        <div className={style.item}>

            <p className={style.title}>{item.title}</p>
            
            {toggle && (
              <div className={style.desc}>
              <p>{item.desc}</p>
          </div>
          )}

            <button className={style.btn} onClick={() => setToggle(!toggle)}>{toggle ? '-': '+'}</button>

        </div>
          

    </>
  )
}

export default FAQ;