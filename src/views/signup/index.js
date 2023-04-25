import React, { useEffect, useState } from "react";
import {
  SignUpStyledComponent,
  SignUpLeftSideBox,
  SignUpRightSideBox,
} from "./signUp.styled";
import { Input, Button } from "../../theme/components";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../configs/firebase";
import { Validate } from "../../helpers";
import LoginPageLeftSideImg from "../../assets/images/loginpageleftsideimg.svg";
import { useNavigate } from "react-router-dom";

const formData = { fullName: "", email: "", password: "" };

function SignUp(props) {
  const [form, setForm] = useState(formData);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    let errorStructure = {
      errorEmail: "",
      errorFullName: "",
      errorPassword: "",
      isValidated: false,
    };

    if (!isFormSubmit) return errorStructure;

    if (!form?.fullName) {
      errorStructure = {
        ...errorStructure,
        errorFullName: "Please enter your name",
      };
    }
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
    } else if (!Validate.minLength(form?.password, 3)) {
      errorStructure = {
        ...errorStructure,
        errorPassword: "Password must be minimum 3 characters",
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

    createUserWithEmailAndPassword(auth, params.email, params.password)
      .then(async (res) => {
        if (res?.user) {
          try {
            await updateProfile(res?.user, { displayName: params?.fullName });
          } catch (e) {
            alert(e?.message || e);
          }
          alert(
            "Congratulations!! you are registered Successfully. Please login"
          );
          navigate("/login");
        } else {
          alert("something went wrong");
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        alert(e?.message || e);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const { errorEmail, errorPassword, errorFullName } = handleValidation();

  return (
    <SignUpStyledComponent>
      <SignUpLeftSideBox>
        <img src={LoginPageLeftSideImg} alt="login" />
      </SignUpLeftSideBox>
      <SignUpRightSideBox>
        <div>
          <h1>Register your Account!👋</h1>
          <br />
          <h5>Become member of firebase test app</h5>
          <br />
          <Input
            label="Full Name"
            type="fullName"
            onChange={handleChange}
            name="fullName"
            value={form.fullName}
            isError={Boolean(errorFullName)}
            errorMessage={errorFullName}
            disabled={isLoading}
          />
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
              Sign Up{isLoading && "..."}
            </Button>
            <div>or</div>
            <Button
              secondary
              disabled={isLoading}
              outline
              small
              onClick={() => navigate("/login")}
            >
              {" "}
              Go to login page
            </Button>
          </div>
        </div>
      </SignUpRightSideBox>
    </SignUpStyledComponent>
  );
}

export default SignUp;
