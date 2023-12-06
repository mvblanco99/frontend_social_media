import stylesSearchResponsive from './SearchResponsive.module.css'
import { Badge, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchResponsive = () => {

  return (
    <>
        <div className={stylesSearchResponsive.container_search} >
            <form className={stylesSearchResponsive.form}>
                <label htmlFor="search_user">
                    <input 
                        type="text" 
                        name="search_user" 
                        id="search_user"
                        placeholder='Search User'
                        className={stylesSearchResponsive.text} 
                    />
                    <IconButton>
                        <Badge color="secondary">
                            <SearchIcon />
                        </Badge>
                    </IconButton>
                </label>
            </form>
        </div>
    </>
  )
}

export default SearchResponsive