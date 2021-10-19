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

  const FbContent = (
    <div
      style={{
        width: "400px",
        margin: "auto",
        background: "#f4f4f4",
        padding: "20px",
      }}
    >
      <img src={state.picture} alt={state.name} />
      <h2>Welcome {state.name}</h2>
      Email: {state.email}
    </div>
  );

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50vh",
        }}
      >
        <FacebookLogin
          appId="283520543647320"
          // autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </>
  );
}
