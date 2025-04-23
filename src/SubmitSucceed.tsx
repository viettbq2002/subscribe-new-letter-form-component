import IconList from "./assets/images/icon-list.svg";
const SubmitSucceed = () => {
  return (
    <div
      className="bg-white flex md:p-8 flex-col justify-between p-10 md:max-w-md max-w-screen
        md:w-auto h-screen md:h-auto md:rounded-4xl gap-8"
    >
      <div className="block md:hidden"></div>
      <div className="flex flex-col gap-8">
        <img
          className="w-15 h-15"
          src={IconList}
          alt="IconList"
        />
        <h1 className="text-blue-800 text-5xl font-semibold">
          Thanks for Subscribing!
        </h1>
        <p>
          A confirmation email has been sent to <b>ash@loremcompany.com</b>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <button
        className="w-full bg-blue-800 text-white cursor-pointer py-3 rounded-md flex items-center
          justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500
          hover:shadow-[0_8px_20px_0_rgba(236,72,153,0.5)]"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SubmitSucceed;
