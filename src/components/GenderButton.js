import React, { useContext } from "react";
import BoardContext from "../context/BoardContext";
import { FaMale, FaFemale } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

function GenderButton({ filterUsers }) {
  const { state } = useContext(BoardContext);
  const { gender } = state;
  const BUTTONS = [
    {
      btngender: gender[0],
      btnicon: <HiUserGroup className="icon" />,
      btncolor: `bg-[#CA2292]`
    },

    {
      btngender: gender[1],
      btnicon: <FaMale className="icon" />,
      btncolor: `bg-[#21BBAC]`
    },

    {
      btngender: gender[2],
      btnicon: <FaFemale className="icon" />,
      btncolor: `bg-[#592894]`
    }
  ];

//   console.log(gender);

  return (
    <>
      <div
        className="users__buttons flex flex-row items-center"
        data-testid="gender-buttons"
      >
        {BUTTONS.map((button, index) => (
          <div
            className="users__btn-container flex flex-col items-center"
            key={index}
          >
            <button
              className={button.btncolor + ` users__btn text-white p-6 `}
              onClick={filterUsers(button.btngender)}
              key={index}
            >
              {button.btnicon}
            </button>
            <p className="mb-4">{button.btngender} Users</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default GenderButton;
