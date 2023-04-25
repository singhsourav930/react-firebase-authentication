import React, { useEffect, useState } from "react";
import {
  SignInStyledComponent,
  SignInLeftSideBox,
  SignInRightSideBox,
} from "./signIn.styled";
import { Input, Button } from "../../theme/components";
import { Validate } from "../../helpers";
import { auth, signInWithEmailAndPassword } from "../../configs/firebase";
import LoginPageLeftSideImg from "../../assets/images/loginpageleftsideimg.svg";
import { useNavigate } from "react-router-dom";

const formData = { email: "", password: "" };

function SignIn(props) {
  const [form, setForm] = useState(formData);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    let errorStructure = {
      errorEmail: "",
      errorPassword: "",
      isValidated: false,
    };

    if (!isFormSubmit) return errorStructure;

    if (!form?.email) {
      errorStructure = { ...errorStructure, errorEmail: "Please enter email" };
    } else if (!Validate.email(form?.email)) {
      errorStructure = {
        ...errorStructure,
        errorEmail: "Please enter valid email",
      };
    }
    if (!form?.password) {
      errorStructure = {
        ...errorStructure,
        errorPassword: "Please enter password",
      };
    } else if (!Validate.minLength(form?.password, 6)) {
      errorStructure = {
        ...errorStructure,
        errorPassword: "Password must be minimum 6 characters",
      };
    }

    if (!errorStructure?.errorEmail && !errorStructure?.errorPassword) {
      errorStructure = {
        ...errorStructure,
        isValidated: true,
      };
    }

    return errorStructure;
  };

  useEffect(() => {
    if (isFormSubmit) {
      handleSubmit();
    }
  }, [isFormSubmit]);

  const onSubmit = () => {
    setIsFormSubmit(Math.random());
  };

  const handleSubmit = () => {
    const { isValidated } = handleValidation();

    if (!isValidated) return;
    const params = { ...form };
    setIsLoading(true);
    signInWithEmailAndPassword(auth, params.email, params.password)
      .then((res) => {
        if (res) {
          navigate("/");
        } else {
          alert("something went wrong");
        }
        setIsLoading(false);
      })
      .catch((e) => {
        alert(e?.message || e);
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const { errorEmail, errorPassword } = handleValidation();

  return (
    <SignInStyledComponent>
      <SignInLeftSideBox>
        <img src={LoginPageLeftSideImg} alt="login" />
      </SignInLeftSideBox>
      <SignInRightSideBox>
        <div>
          <h1>Sign in to Firebase Auth Test App!👋</h1>
          <br />

          <br />
          <Input
            label="Email"
            type="email"
            onChange={handleChange}
            name="email"
            value={form.email}
            isError={Boolean(errorEmail)}
            errorMessage={errorEmail}
            disabled={isLoading}
          />
          <br />
          <Input
            label="Password"
            type="password"
            onChange={handleChange}
            value={form.password}
            name="password"
            isError={Boolean(errorPassword)}
            errorMessage={errorPassword}
            disabled={isLoading}
          />
          <br />
          <div className="d-flex justify-content-between align-items-center ">
            <Button onClick={onSubmit} disabled={isLoading} small>
              Sign In{isLoading && "..."}
            </Button>
            <div>or</div>
            <Button
              secondary
              disabled={isLoading}
              outline
              small
              onClick={() => navigate("/signup")}
            >
              {" "}
              Go to sign up page
            </Button>
          </div>
        </div>
      </SignInRightSideBox>
    </SignInStyledComponent>
  );
}

export default SignIn;
