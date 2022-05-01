import React from "react";
import Header from "./sections/Header";
import SearchBar from "./sections/SearchBar";

const App = () => {
  return (
    <>
      <Header />
      <SearchBar
        filterInitialValues={{}}
        loading={false}
        onGenerateCB={Function.prototype}
        onReset={Function.prototype}
        partnersList={[]}
      />
    </>
  );
};

export default App;
