import React from "react";
import Buttons from "./Buttons";

const Footer = () => {
  return (
    <div className="w-full m-auto pb-3 flex flex-col">
      {/* Top of the footer */}
      <div
        style={{
          background: "url('/images/bg-boost-desktop.svg'), #3a3054",
        }}
      >
        <div className="items-center justify-center flex flex-col p-4">
          <h1 className="mb-5 text-2xl text-grey font-bold">
            Boost your links today
          </h1>
          <Buttons>Get Started</Buttons>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-primary">
        <div className="w-3/4 flex flex-col sm:flex-row m-auto mt-5">
          {/* Logo */}
          <div className="w-[10%] ">
            <h3 className="text-2xl text-grey font-bold">Shortly</h3>
          </div>
          {/* Rest */}
          <div className=" m-auto w-[60%] ">
            <div className="flex sm:flex-row flex-col justify-between gap-3">
              <div>
                <h6 className="text-grey text-base font-bold mb-2">Features</h6>
                <ul className="text-gray-400  text-sm">
                  <li>Link Shortening</li>
                  <li>Branded</li>
                  <li>Links Analytics</li>
                </ul>
              </div>

              <div>
                <h6 className="text-grey text-base font-bold mb-2">Features</h6>
                <ul className="text-gray-400  text-sm">
                  <li>Link Shortening</li>
                  <li>Branded</li>
                  <li>Links Analytics</li>
                </ul>
              </div>

              <div>
                <h6 className="text-grey text-base font-bold mb-2">Features</h6>
                <ul className="text-gray-400  text-sm">
                  <li>Link Shortening</li>
                  <li>Branded</li>
                  <li>Links Analytics</li>
                </ul>
              </div>

              <div className="flex flex-row justify-between gap-3 w-5 h-5">
                <img src="/images/icon-facebook.svg" alt="facebook" />
                <img src="/images/icon-twitter.svg" alt="X" />
                <img src="/images/icon-pinterest.svg" alt="Pinterest" />
                <img src="/images/icon-instagram.svg" alt="IG" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
