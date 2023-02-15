import { Button } from '@mui/material'
import React from 'react'

export const Counterdecrese = (props) => {
    const {counterAdjust}=props
    
    

  return (
    <div>
         <Button variant='contained' color='success'
         onClick={()=> counterAdjust(-1)}
        >Decrement</Button>

    </div>
  )
}
