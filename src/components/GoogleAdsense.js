import React from "react";
import AdSense from "react-adsense";

import { mediaPc, mediaPhone } from "../helpers/styleHelper";

const Adsense = () => (
  <div
    style={{
      width: mediaPc ? "260px" : "100%",
      height: mediaPc ? "" : "150px",
      margin: mediaPhone ? "0 auto" : "0",
    }}
  >
    <AdSense.Google
      client="ca-pub-6943525600302796"
      slot="5752167312"
      format="auto"
      responsive="true"
    />
  </div>
);

export default Adsense;
