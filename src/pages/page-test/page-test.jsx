import React from "react";
import Header from "../../components/header/header";
import "./page-test.scss";

class Test extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <bds-upload
          title-name="Title uploader"
          subtitle="Description uploades, only one file"
        ></bds-upload>
      </div>
    );
  }
}

export default Test;
