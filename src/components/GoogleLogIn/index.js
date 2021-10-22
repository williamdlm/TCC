import GoogleLogin from "react-google-login";
import React, { useContext } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";

export default function GoogleLogIn({ handleStatusLogged }) {
  const { handleIsLogged, changePlayerName, changePlayerImage } =
    useContext(ExperienceContext);
  const changeStatus = () => {
    handleStatusLogged(1);
  };
  const responseGoogleSucess = (response) => {
    const {
      profileObj: { GivenName, familyName, name, imageUrl },
    } = response;
    handleIsLogged();
    changeStatus();
    changePlayerImage(imageUrl);
    changePlayerName(name);
  };

  const responseGoogleFailed = (response) => {
    console.log("falha resposta google");
    console.log(response);
  };
  return (
    <GoogleLogin
      className="googleBtn"
      clientId="279991950987-fa92c6k1lffqtegplfqd9r1p8dos5kn6.apps.googleusercontent.com"
      // buttonText="LOGIN WITH GOOGLE"
      onSuccess={responseGoogleSucess}
      onFailed={responseGoogleFailed}
      cookiePolicy={"single_host_origin"}
    />
  );
}
