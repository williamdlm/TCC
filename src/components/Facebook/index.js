import React, { Component, useContext, useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import { ExperienceContext } from "../../contexts/ExperienceContext";

export default function Facebook({ handleStatusLogged }) {
  const { handleIsLogged } = useContext(ExperienceContext);
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
  };

  const componentClicked = () => console.log("clicked");

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
      {/* {state.isLoggedIn ? (
        <FbContent />
      ) : (
        <FacebookLogin
          appId="632902014369254"
          //autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      )} */}
      <FacebookLogin
        appId="632902014369254"
        // autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </>
  );
}
