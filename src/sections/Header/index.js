import React from "react";
import HeaderContentContainer from "../../components/HeaderContentContainer";
import MajorTitle from "../../components/MajorTitle";
import Button from "../../components/Button";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.Background} />
      <HeaderContentContainer>
        <MajorTitle />
        <Button
          btnText="Sign In"
          btnSize="large"
          btnType="Primary"
          onClickCallback={() => console.log("Sign In")}
        />
      </HeaderContentContainer>
    </>
  );
};

export default Header;
