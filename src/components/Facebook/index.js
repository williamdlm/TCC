import React, { Component, useContext, useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import { ExperienceContext } from "../../contexts/ExperienceContext";

export default function Facebook({ handleStatusLogged }) {
  const { handleIsLogged, changePlayerName, changePlayerImage } =
    useContext(ExperienceContext);
  const changeStatus = () => {
    handleStatusLogged(1);
  };

  const [state, setState] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  });

  useEffect(() => {}, []);

  const responseFacebook = (response) => {
    console.log(response);
    setState({
      //   isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
    handleIsLogged();
    changeStatus();
    changePlayerImage(response.picture.data.url);
    changePlayerName(response.name);
  };

  return (
    <FacebookLogin
      appId="632902014369254"
      // autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}
