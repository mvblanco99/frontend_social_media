import { useState } from 'react';
import { HeaderContext } from './HeaderContext'

const HeaderContextProvider = ({children}) => {

    const [openSearch, setOpenSearch] = useState(false);
    const handleOpenSearch = () => setOpenSearch(!openSearch) 

  return (
    <HeaderContext.Provider value={{
        openSearch,
        handleOpenSearch
    }}>
        {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContextProvider