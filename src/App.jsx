import React, { useState } from "react";
import Sitebar from "./components/sitebar/Sitebar";
import Home from "./Home";
import Card from "./components/card/Card";
import Payment from "./components/card/Payment";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Dine In");
  const [clickSlect, setClickSlect] = useState(false);
  const [paymentClick, setPaymentClick] = useState(false);
  const [select2, setSelect2] = useState(false);
  const handleSelect = (select) => {
    setSelectedOption(select);
    setClickSlect(false);
    setSelect2(false);
  };
  return (
    <div className="flex justify-between h-[100vh] overflow-hidden  bg-[#252836] ">
      <Sitebar />
      <div className="flex-[1] h-[100vh]">
        <Home
          handleSelect={handleSelect}
          clickSlect={clickSlect}
          selectedOption={selectedOption}
          setClickSlect={setClickSlect}
        />
      </div>
      <Card
        selectedOption={selectedOption}
        setPaymentClick={setPaymentClick}
        handleSelect={handleSelect}
      />

      {paymentClick && (
        <Payment
          selectedOption={selectedOption}
          setPaymentClick={setPaymentClick}
          handleSelect={handleSelect}
          select2={select2}
          setSelect2={setSelect2}
        />
      )}
    </div>
  );
};

export default App;
