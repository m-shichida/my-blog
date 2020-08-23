import React from "react";
import AdSense from "react-adsense";

import { mediaPc } from "../../helpers/styleHelper";

const Adsense = () => (
  <div>
    <AdSense.Google
      client={process.env.googleAdsenceID}
      slot=""
      style={{ width: mediaPc ? "258px" : "100%" }}
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  </div>
);

export default Adsense;
