import React from 'react'
import Popup from 'reactjs-popup';
import { FormContent } from './FormContent';
import classes from './PopupForm.module.css'
export const PopupForm = ({data}) => {
    return (
        <div>
            <Popup 
              trigger={<button>+</button>}
              modal
              nested
            >
              {
                  close =>(
                        <div className={classes.modal}>
                            <button className={classes.close} onClick={close}>
                                &times;
                            </button>
                            <div className={classes.header}>Question Paper: {data}</div>
                            <div className={classes.content}>
                                    {' '}
                            {/* content */}
                            <FormContent />
                            </div>
                       
                        </div>
                        
                  )
              }
            </Popup>
        </div>
    )
}
