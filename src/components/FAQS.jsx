import React from 'react';

import faqData from '../data';
import FAQ from './FAQ';

const FAQS = () => {
    
  return (
    <>
     <h4>FAQs</h4>
      {faqData.map((item, index) => {
        return <FAQ key={index} item={item} />
      })}
    </>
  )
}

export default FAQS;