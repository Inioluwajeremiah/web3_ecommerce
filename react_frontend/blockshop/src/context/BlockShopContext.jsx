import React from 'react'

export const BlockShopContextInstance = React.createContext();

const BlockShopContext = ({...children}) => {


  return (
    <BlockShopContextInstance.Provider  value = {{}}>

        {...children}

    </BlockShopContextInstance.Provider>
  )
}

export default BlockShopContext