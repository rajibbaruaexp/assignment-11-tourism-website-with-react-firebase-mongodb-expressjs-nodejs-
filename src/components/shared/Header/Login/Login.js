import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Login = () => {
  // login registration state
  const [error, setError] = useState("");

  const { signInUsingGoogle, setIsloading, setUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  //google sign in
  const handleGoogleLogIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  return (
    <div className="bg-white sm:bg-gray-200 min-h-screen  flex flex-col justify-center items-center">
      <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
        {/* google sign in   */}
        <div className="flex flex-col gap-4 px-0 py-4">
          <div className="my-2 flex flex-row justify-center">
            <span className="absolute bg-white px-4">or</span>
            <div
              className="w-full bg-gray-200 mt-3"
              style={{ height: "1px" }}
            ></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <button
              onClick={handleGoogleLogIn}
              className="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              Sign-in with Google
            </button>
          </div>
          {error ? (
            <div className="w-full flex flex-row justify-center">
              <span className="text-white bg-red-600 p-4 ">{error}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
