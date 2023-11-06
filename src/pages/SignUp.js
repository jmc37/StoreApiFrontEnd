import React from "react";
import Header from "../components/Navigation/Header";
import Footer from "../components/Navigation/Footer";
import SignUpForm from "../components/Authentication/SignupForm";
import SignInForm from "../components/Authentication/SignInForm";
function SignUp({
  userAuthenticated,
  setUserAuthenticated,
  handleSetUser,
  user,
}) {
  return (
    <>
      <Header userAuthenticated={userAuthenticated} user={user} />;
      <SignInForm
        setUserAuthenticated={setUserAuthenticated}
        handleSetUser={handleSetUser}
        user={user}
      />
      <Footer />
    </>
  );
}

export default SignUp;
