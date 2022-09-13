import React from 'react';
import { useEffect } from 'react';
import MenuNarrow from './MenuNarrow';
import MenuWide from './MenuWide';

export default function Menu({orientation, itemsPosition}) {

  const handleMenu = ()=>{
    if(orientation === "Portrait" && (window.screen.width <=414)){
      return <MenuNarrow/>
    }else{
      return <MenuWide itemsPosition = {itemsPosition}/>
    }
  }

  return (
    handleMenu()
  )
}
