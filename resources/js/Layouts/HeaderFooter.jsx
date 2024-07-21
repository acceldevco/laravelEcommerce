import MenuEco from '@/Components/Menu'
import MenuDown from '@/Components/MenuDown'
import React from 'react'

function HeaderFooter({child}) {
  return (
    <>
    <MenuEco/>
    {child}
    <MenuDown/>
    </>
  )
}

export default HeaderFooter