import React from 'react';
import { useDate } from '../hooks/useDate';
import { Fade } from 'react-awesome-reveal';

export const Footer = () => {
  const Date = useDate();

  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-links">
          <div>
            <Fade direction="up">
              <a href="/">contact@americanacres.com</a>
              <a href="/">0479 72 30 39</a>
            </Fade>

            <div className="footer-arrow">
              <Fade direction="up" delay={1.2}>
                <div className="arrow-bg">
                  <Fade direction="up" delay={0.1}>
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      stroke-line-join="round"
                      stroke-miter-limit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Fade>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <Fade cascade damping={0.2}>
            <div className="footer-col">
              <ul>
                <Fade direction="up">
                  <li>Home</li>
                  <li>Cases</li>
                  <li>About</li>
                  <li>Why work with Us?</li>
                </Fade>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <Fade direction="up">
                  <li>Agency owner?</li>
                  <li className="stroked">Can we help you</li>
                </Fade>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <Fade direction="up">
                  <li>1400 Elm Ave</li>
                  <li>Lancaster</li>
                  <li>Pennsylvania</li>
                </Fade>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <Fade direction="up">
                  <li>Policy</li>
                  <li>Terms of use</li>
                </Fade>
              </ul>
            </div>
          </Fade>
        </div>

        <div className="footer-copyright">
          <Fade direction="up">
            <a href="/">All rights reserved © American Acres Insurance 2022</a>
            <p>
              {Date.date} {Date.time} {Date.wish}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};
