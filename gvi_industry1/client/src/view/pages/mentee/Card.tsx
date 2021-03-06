import axios from "axios";
import { useEffect } from "react";
import mongoose from "mongoose";
//@ts-ignore
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//@ts-ignore
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
//@ts-ignore
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
//@ts-ignore
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import "./style/card.scss";

interface CardProps {
  selectedUsers: any;
}

const Card = (props: CardProps) => {

  const { selectedUsers } = props;

  return (
    <>
    {selectedUsers.map((selectedUser: any, i:any) =>
        <div className="card" key={i}>
          <div className="card__photo">
            {selectedUser.image ? <img src={`${selectedUser.image}`} />: <img src={'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png'} />}
          </div>
          <div className="card__center">
            <p>{selectedUser['name']['first']} {selectedUser['name']['last']}</p>
            <div className="card__flex">
              <img src={`${selectedUser.country}`}  />
              <LinkedInIcon className="card__flex__linkdIn" style={{ fontSize: "30px" }} >
                {/* {selectedUser.linkedInProfile} */}
              </LinkedInIcon>
            </div>
            <p className="card__company">{selectedUser.fieldsOfKnowledge}</p>
            <p className="card__profession">{selectedUser.sector}</p>
          </div>
          <div className="card__star">
            <StarIcon></StarIcon>
          </div>

        </div>
      )
    }
    </>
  );
};

export default Card;
