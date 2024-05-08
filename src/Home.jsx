import React, { useState } from "react";
import Header from "./components/header/Header";
import FootList from "./components/home/FootList";

const Home = ({ selectedOption, handleSelect, clickSlect, setClickSlect }) => {
  const [tabList, setTabList] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <div className="w-full h-full bg-[#252836] p-[10px] pr-[38px]">
      <Header search={search} setSearch={setSearch} />
      <FootList
        tabList={tabList}
        setTabList={setTabList}
        selectedOption={selectedOption}
        handleSelect={handleSelect}
        clickSlect={clickSlect}
        setClickSlect={setClickSlect}
        search={search}
      />
    </div>
  );
};

export default Home;
