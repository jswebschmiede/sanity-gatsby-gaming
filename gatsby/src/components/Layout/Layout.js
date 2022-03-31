import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        {this.props.noHeader ? null : <Header />}
        <main>{children}</main>
        {this.props.noFooter ? null : <Footer />}
      </>
    );
  }
}

export default Layout;
