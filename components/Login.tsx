import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
              <div className="rounded-md shadow">
                <div
                  onClick={() =>
                    signIn("cognito", {
                      callbackUrl:
                        (router.query.callbackUrl as string) ??
                        `${window.location.origin as string}`,
                    })
                  }
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 cursor"
                >
                  Sign In With Email
                </div>
                <hr />
                <div
                  onClick={() =>
                    signIn("google", {
                      callbackUrl:
                        (router.query.callbackUrl as string) ??
                        `${window.location.origin as string}`,
                    })
                  }
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 cursor"
                >
                  Sign In With Google
                </div>
                <hr />
                <div
                  onClick={() =>
                    signIn("facebook", {
                      callbackUrl:
                        (router.query.callbackUrl as string) ??
                        `${window.location.origin as string}`,
                    })
                  }
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 cursor"
                >
                  Sign In With Facebook
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
