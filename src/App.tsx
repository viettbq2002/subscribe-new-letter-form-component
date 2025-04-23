import "./App.css";
import DesktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import MobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import IconList from "./assets/images/icon-list.svg";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import SubmitSucceed from "./SubmitSucceed";
export type NewLetter = {
  email: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<NewLetter>({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-blue-800 md:p-10">
      {isSubmitSuccessful ? (
        <SubmitSucceed />
      ) : (
        <div
          className="bg-white flex md:p-8 flex-col md:flex-row w-full md:w-auto h-screen md:h-auto
            md:rounded-4xl justify-between items-center gap-8"
        >
          <img
            src={MobileImage}
            className="block md:hidden w-full"
          />
          <div className="flex justify-center items-center p-8 md:p-0">
            <form
              className="flex flex-col gap-6 max-w-full lg:max-w-[85%] text-blue-800"
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <h1 className="lg:text-5xl text-4xl font-extrabold">
                Stay updated!
              </h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-row items-center gap-4">
                  <img src={IconList} />
                  <p>Product discovery and building what matters</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <img src={IconList} />
                  <p>Measuring to ensure updates are a success</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <img
                    src={IconList}
                    alt="mobile-illustration"
                  />
                  <p>And much more!</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <label htmlFor="email">Email address</label>
                  <p className="text-primary">{errors.email?.message}</p>
                </div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  id="email"
                  className={clsx(
                    `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                      focus:outline-blue-800 focus:outline-1 block w-full p-3.5`,
                    errors.email &&
                      " border-red-500 focus:outline-none bg-red-100 placeholder:text-red-400",
                  )}
                  placeholder="email@company.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white cursor-pointer py-3.5 rounded-md flex items-center
                  justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500
                  hover:shadow-[0_8px_20px_0_rgba(236,72,153,0.5)]"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <img
            className="sm:w-3xs md:w-2xs hidden md:block lg:w-sm"
            src={DesktopImage}
            alt="desktop-illustration"
          />
        </div>
      )}
    </div>
  );
}

export default App;
