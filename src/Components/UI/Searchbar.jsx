import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {styled,alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
const Search = styled('div')(({ theme }) => ({
 
  
  backgroundColor: '#fff',
 paddingLeft:5,
  marginBottom:5,
  marginLeft: 30,
  width: '38%',
 display:'flex',
 justifyContent:'space-between',
 
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  marginTop: 8,
  marginLeft:0,
  paddingLeft:0,
  marginRight:'40px',
  height: '100%',
  width:0,
    display:'flex',
  color:'blue',
  pointerEvents: 'cursor',
    cursor:'pointer'
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize:'unset',
  
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
   

  },
}));



const Searchbar = () => {
    return (
        <>
             <Search>
            
            <StyledInputBase
              placeholder="Search For Your Style"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper color="primary">
              <SearchIcon />
            </SearchIconWrapper>
            
          </Search>
        </>
    )
}

export default Searchbar
