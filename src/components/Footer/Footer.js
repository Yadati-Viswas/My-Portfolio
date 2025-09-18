import React from "react";
import styled from "styled-components";
import footerBg from "../../Assets/footer-bg.png"; 

const FooterSection = styled.div`
  background-image: url(${footerBg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/Yadati-Viswas"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ydsv
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
