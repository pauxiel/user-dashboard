import React from 'react';
import { FiSearch } from 'react-icons/fi';
import GenderButton from '../components/GenderButton';



function HeroContainer({ handleSearchSubmit, handleSearch, filterUsers }) {


    return (
        <div className="flex w-full flex-col flex-1 justify-center items-center opacity-100 bg-[#262A41] bg-no-repeat">
                <div className="justify-center items-center mt-[5rem] mb-[5rem]">
                  <div className="text-white opacity-100 text-4xl tracking-tighter">Hello, <strong>Emerald</strong></div>
                  <div className="text-sm font-light text-white tracking-wide opacity-60 mt-4 mb-8">Welcome to your dashboard, kindly sort through the user base</div>
                  <form onSubmit = {handleSearchSubmit}>
                    <div className="search-form">
                        <FiSearch className="search-ico"/>
                        <input className="search" type="text" onChange = {handleSearch}  placeholder="Find a user" />
                    </div>
                    </form>

                  <div className="show-users">Show Users</div>
                  <GenderButton filterUsers = {filterUsers}/>
                  
              </div>
            </div>
    )
}

export default HeroContainer;