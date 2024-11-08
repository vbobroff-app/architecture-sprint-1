import React, { useEffect } from 'react';

import "../styles/page/page.css";
import "../styles/profile/profile.css";
import api from "../utils/api";


import addPath from '../images/add-icon.svg';
import editPath from '../images/edit-icon.svg';

function Profile({ onUserDataSuccess }) {
    const [currentUser, setCurrentUser] = React.useState({});

    useEffect(() => {
        api
          .getUserInfo()
          .then((userData) => {
            setCurrentUser(userData);
            onUserDataSuccess(userData);
          })
          .catch((err) => console.error(err));
      }, []);

      function onEditAvatar(){
        //
      }

      function  onEditProfile(){
        //
      }

      function  onAddPlace(){
        //
      }

    const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

    const editUrl = { backgroundImage: `url(${editPath})` };
    const addUrl = {backgroundImage: `url(${addPath})`}

    return (
        <div className="profile page__section">
            <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" style={editUrl} onClick={onEditProfile}></button>
                <p className="profile__description">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" type="button" style={addUrl} onClick={onAddPlace}></button>
        </div>
    );
}

export default Profile;