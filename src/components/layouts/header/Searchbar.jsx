import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <form className="hidden sm:flex w-[800px] px-4 py-1.5 items-center shadow-md bg-white rounded-sm overflow-hidden">
    <input
      type="text"
      className="text-sm flex-1 outline-none border-none placeholder-gray-500"
      placeholder="Search for products, brands and more"
    />
    <button
      type="submit"
      className="text-purple-700"
    >
      <SearchIcon />
    </button>
  </form>
  )
}

export default Searchbar