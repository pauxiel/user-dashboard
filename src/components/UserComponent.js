import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import {BsArrowRight} from 'react-icons/bs';
import BoardContext from "../context/BoardContext";
import {SET_HIDDEN} from '../reducers/types';
import UserDetails from '../layout/UserDetails';

function UserComponent({name, image, address, email, phone, photo, username, old, home, eAddress, created, phoneNo, cellNo,  }) {

    const { state, dispatch } = useContext(BoardContext);
    const { isHidden } = state;


    function handleToggleCardView () {
         dispatch ({
              type: SET_HIDDEN,
              isHidden: !isHidden,
         })
    }

    return (
        <div>
            {/* not expanded start */}
        <div className={`${isHidden  ? "scroll" : "scroll-one"}`}>
            <div className="user">
                <div className ="image">
                    <img className="profile" alt='profile' height="4rem" width="4rem" src={image} />
                </div>
                <div className="user-detail">
                    <div className="name">{name}</div>
                    <div className="address">{address}</div>
                    <div className="footer">
                        <div className="footer-email-div">
                                <div className="email-icon">
                                    <BiEnvelope />
                                </div>
                            <div className="footer-email">
                                {email}
                            </div>
                        </div>
                        <div className="footer-phone-div">
                                    <div className="phone-icon">
                                        <FiPhoneCall />
                                    </div>
                            <div className="footer-phone">
                                {phone}
                            </div>
                        </div>
                    </div>
                </div>
                    <div onClick={handleToggleCardView} className="footer-button">
                        <BsArrowRight className="footer-ico" />
                    </div>
            </div>
    </div>

    {/* not expanded end */}

    {/* expanded start */}
    <div className={`${!isHidden ? "userDetail-card-one" : "userDetail-card"} ${!handleToggleCardView ? '' : 'accordion'}`}>
        <UserDetails photo={photo} username={username} old={old} home={home} eAddress={eAddress} created={created} phoneNo={phoneNo} cellNo={cellNo} onMouseClick={handleToggleCardView} />
    </div>
    {/* expanded end */}
</div>
    )

}


export default UserComponent;