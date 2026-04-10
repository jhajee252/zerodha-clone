
import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 text-center">
        <h1 className="fs-2">People</h1>
      </div>

      <div
        className="row text-muted"
        style={{ fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/image/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "55%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://zerodha.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/nithinkamath"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;