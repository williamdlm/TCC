import GoogleLogin from "react-google-login";
import React, { useContext } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import styled from "styled-components";

export default function GoogleLogIn({ handleStatusLogged }) {
  const { handleIsLogged } = useContext(ExperienceContext);
  const changeStatus = () => {
    handleStatusLogged(1);
  };
  const responseGoogleSucess = (response) => {
    const {
      profileObj: { GivenName, familyName, name, imageUrl },
    } = response;
    handleIsLogged();
    changeStatus();
  };

  const responseGoogleFailed = (response) => {
    console.log("falha resposta google");
    console.log(response);
  };
  return (
    // <div
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     justifyContent: "center",
    //     marginTop: "50vh",
    //   }}
    // >
    <GoogleLogin
      clientId="279991950987-fa92c6k1lffqtegplfqd9r1p8dos5kn6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogleSucess}
      onFailed={responseGoogleFailed}
      cookiePolicy={"single_host_origin"}
    />
    // </div>
  );
}
