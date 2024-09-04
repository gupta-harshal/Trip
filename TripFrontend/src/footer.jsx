
import React from "react";
import "./styles/footer.css";
import { FaInstagram,FaFacebook ,FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquarePinterest } from "react-icons/fa6";


const Footer= () => {
  return (
    <div className="boxF">
      <footer className="footer">
        <div className="group">
          <div className="div">
            <div className="frameF">
              <div className="code-cascaders">Code Cascaders</div>
            </div>
            <div className="socialF">
              <a href=""><FaInstagram color="white" fontSize="1.2em"/>
              </a>
              <a href=""><FaFacebook color="white" fontSize="1.2em"/></a>
              <a href=""><FaSquareXTwitter color="white" fontSize="1.2em"/></a>
              <a href=""><FaSquarePinterest color="white" fontSize="1.2em"/></a>
              <a href=""><FaGithubSquare color="white" fontSize="1.2em"/></a>
            </div>
          </div>
          <div className="group-2">
            <div className="group-3">
              <div className="frameF-wrapper">
                <div className="div-wrapper">
                  <p className="text-wrapper">
                    Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by
                    category.
                  </p>
                </div>
              </div>
              <div className="brand-wrapper">
                <div className="brand">
                  <div className="logo">
                    <div className="travelaja">travnt</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-4">
              <div className="frameF-2">
                <div className="text-wrapper-2">Links</div>
              </div>
              <div className="group-5">
                <div className="link">
                  <a href="" className="link-2">Explore</a>
                </div>
                <div className="link-wrapper">
                  <a href="" className="link-2">Booking</a>
                </div>
                <div className="link-3">
                  <a href="" className="link-2">News</a>
                </div>
                <div className="link-4">
                  <a href="" className="link-2">Contact</a>
                </div>
                <div className="link-5">
                  <a href="" className="link-2">Account</a>
                </div>
              </div>
            </div>
            <div className="group-6">
              <div className="frameF-2">
                <a href="" className="text-wrapper-2">Services</a>
              </div>
              <div className="group-7">
                <div className="link">
                  <a href="" className="link-2">About Us</a>
                </div>
                <div className="link-wrapper">
                  <a href="" className="link-2">Blog &amp; Articles</a>
                </div>
                <div className="link-3">
                  <a href="" className="link-2">Term and Condition</a>
                </div>
                <div className="link-4">
                  <a href="" className="link-2">Privacy Policy</a>
                </div>
                <div className="link-5">
                  <a href="" className="link-2">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="group-8">
              <div className="frameF-2">
                <div className="text-wrapper-2">Contact</div>
              </div>
              <div className="group-9">
                <div className="link">
                  <div className="link-2">Address: Jl.Codelaras No.205A</div>
                </div>
                <div className="link-wrapper">
                  <div className="link-2">Kediri, Pare AG17</div>
                </div>
                <div className="link-3">
                  <div className="link-2">Phone: 123 456 7890</div>
                </div>
                <div className="link-4">
                  <div className="link-2">Email: myagungperdana@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

