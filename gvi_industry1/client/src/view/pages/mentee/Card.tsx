import axios from "axios";
import { useEffect } from "react";
import mongoose from "mongoose";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import "./style/card.scss";

interface Card {
  selectedUsers: any;
}

const Card = (props: Card) => {

  const { selectedUsers } = props;

  return (

    <div className="card" key={selectedUsers._id}>
        {selectedUsers.map((selectedUser: any) =>
          <div className="card__photo">
            <img src={`${selectedUsers.image}`} alt="" />
          </div>
          <div className="card__center">
            <p className="card__name"> {selectedUsers.name}</p>
            <div className="card__flex">
              <img src={`${selectedUsers.country}`} alt="" />
              <LinkedInIcon className="card__flex__linkdIn" style={{ fontSize: "30px" }} >
                {selectedUsers.linkedInProfile}
              </LinkedInIcon>
            </div>
            <p className="card__company">{selectedUsers.fieldsOfKnowledge}</p>
            <p className="card__profession">{selectedUsers.sector}</p>
          </div>
          <div className="card__star">
            <StarIcon></StarIcon>
          </div>
        )}
    </div>
  );
};

export default Card;
