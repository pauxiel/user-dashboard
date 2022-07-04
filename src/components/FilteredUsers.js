import React, {useContext} from 'react';
import BoardContext from "../context/BoardContext";
import UserComponent from '../components/UserComponent';



function FilteredUsers() {
  
    const { state, dispatch } = useContext(BoardContext);
    const {currentPage, usersPerPage, users, search} = state;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const searchedUsers = currentUsers.filter((searchRes) =>
    searchRes.name.first.toLowerCase().includes(search.toLowerCase()) || searchRes.name.last.toLowerCase().includes(search.toLowerCase())

)

    return (
      <>
      {searchedUsers.map((filteredUser, index) => {
           <div key={index}>
           <UserComponent name={filteredUser.name.title + ' ' + filteredUser.name.first + ' ' + filteredUser.name.last} 
           image={filteredUser.picture.medium} address={filteredUser.location.street.number + ' ' + filteredUser.location.street.name + ', ' + filteredUser.location.city + ', ' + filteredUser.location.state} 
           email={filteredUser.email} phone={filteredUser.phone}

           photo={filteredUser.picture.large} username={filteredUser.name.title + ' ' + filteredUser.name.first + ' ' + filteredUser.name.last} old={filteredUser.dob.age} home={filteredUser.location.street.number + ' ' + filteredUser.location.street.name + ', ' + filteredUser.location.city + ', ' + filteredUser.location.state}
           eAddress={filteredUser.email} created={filteredUser.registered.date} phoneNo={filteredUser.phone} cellNo={filteredUser.cell}
           />
       </div>
      })

      }

      </>

    )

}

export default FilteredUsers;