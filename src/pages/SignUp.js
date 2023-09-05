import React from "react";
import Header from "../components/Header";
import SignUpForm from "../components/SignupForm";
import SignInForm from "../components/SignInForm";
function SignUp({
  userAuthenticated,
  setUserAuthenticated,
  handleSetUser,
  user,
}) {
  return (
    <>
      <Header userAuthenticated={userAuthenticated} user={user} />;
      <SignUpForm />
      <SignInForm
        setUserAuthenticated={setUserAuthenticated}
        handleSetUser={handleSetUser}
        user={user}
      />
    </>
  );
}

export default SignUp;
