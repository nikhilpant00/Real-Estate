import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Message,
  Form,
  Segment,
  Header,
} from "semantic-ui-react";
import {
  getGetAssertionChallenge,
  getMakeCredentialsChallenge,
  sendWebAuthnResponse,
  getProfile,
  logout,
  registerFail,
} from "./webauthn";
import {
  isPlatformWebAuthnSupport,
  preformatGetAssertReq,
  preformatMakeCredReq,
  publicKeyCredentialToJSON,
} from "../../helpers";
import { useNavigate } from "react-router-dom";

function Auth({ setIsLogin }) {
  // console.log("setislogin", setIsLogin);
  const Navigate = useNavigate();

  const [isPlatformSupported, setisPlatformSupported] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [profileData, setProfileData] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleRegister = () => {
    console.log("====<");
    getMakeCredentialsChallenge({ email, phone, name })
      .then((response) => {
        console.log("===>server cred:", response);
        const publicKey = preformatMakeCredReq(response);
        console.log("===>formatted server cred:", publicKey);
        return navigator.credentials.create({ publicKey });
      })
      .then((response) => {
        console.log("===>client sensor sign :", response);
        const makeCredResponse = publicKeyCredentialToJSON(response);
        console.log("===>formatted client sensor sign :", makeCredResponse);
        return sendWebAuthnResponse(makeCredResponse);
      })
      .then((response) => {
        console.log("===>server confirmation after register :", response);
        if (response.status === "ok") {
          setErrMsg("");
          setSuccessMsg("You can now try logging in");
        } else setErrMsg(response.message);
      })
      .catch((err) => {
        registerFail({ email }).then(() => {
          if (err.response) setErrMsg(err.response.data);
          else console.log(err);
        });
      });
  };

  const handleLogin = () => {
    console.log("loginclicked");
    getGetAssertionChallenge({ email })
      .then((response) => {
        const publicKey = preformatGetAssertReq(response);
        return navigator.credentials.get({ publicKey });
      })
      .then((response) => {
        console.log("inthisresponseblock");
        console.log("inthisresponseblockresponse", response);
        let getAssertionResponse = publicKeyCredentialToJSON(response);
        return sendWebAuthnResponse(getAssertionResponse);
      })
      .then((response) => {
        console.log("in the final block of frontend");
        if (response.status === "ok") {
          localStorage.setItem("loggedIn", true);

          setIsLogin(true);
          setEmail("");
          setSuccessMsg("");
          setErrMsg("");
          Navigate("/");
        } else {
          setSuccessMsg("");
          setErrMsg(response.message);
        }
      })
      .catch((err) => {
        if (err.response) setErrMsg(err.response.data);
        else console.log(err);
      });
  };

  // // useEffect(() => {
  // //   if (localStorage.getItem("loggedIn")) setLoggedIn(true);
  // //   if (loggedIn)
  // //     getProfile()
  // //       .then((data) => {
  // //         setProfileData(data);
  // //       })
  // //       .catch((err) => {
  // //         setErrMsg(err.response.data);
  // //         localStorage.removeItem("loggedIn");
  // //       });
  // // }, [loggedIn]);

  useEffect(() => {
    isPlatformWebAuthnSupport().then((result) => {
      setisPlatformSupported(result);
    });

    //   return () => {};
  }, []);

  return (
    <div className="App-header">
      <Grid container textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450, minWidth: 300 }}>
          <Header as="h2" textAlign="center" style={{ color: "white" }}>
            WebAuthn example
          </Header>
          {!isPlatformSupported && (
            <Message
              negative
              icon="warning sign"
              size="mini"
              header={
                "Sorry, webauthn is not supported in your current platform."
              }
            />
          )}

          <Form size="large">
            {errMsg && (
              <Message
                negative
                icon="warning sign"
                size="mini"
                header={errMsg}
              />
            )}
            {successMsg && (
              <Message
                positive
                icon="thumbs up"
                size="mini"
                header={successMsg}
              />
            )}
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={handleEmailChange}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                onChange={handleNameChange}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Phone"
                onChange={handlePhoneChange}
              />
              <Button
                fluid
                size="large"
                onClick={handleRegister}
                style={{
                  marginTop: 8,
                  color: "white",
                  backgroundColor: "#19857b",
                }}
                disabled={!email}
              >
                Register
              </Button>
              <Button
                fluid
                size="large"
                onClick={handleLogin}
                style={{
                  marginTop: 8,
                  color: "white",
                  backgroundColor: "#19857b",
                }}
                disabled={!email}
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Auth;
