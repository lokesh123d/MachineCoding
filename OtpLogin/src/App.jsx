import PhoneOtp from "./PhoneOtp";

const App = () => {
  return (
    <div>
      <h1>Login With Phone Number..</h1>
      <PhoneOtp otpLength={4} />
    </div>
  );
};

export default App;
