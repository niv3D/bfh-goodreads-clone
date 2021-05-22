import React, { useState, useEffect } from "react";
import api from "../../../../service/api";

import "./styles.css";

function BookDetails({
  match: {
    params: { isbn },
  },
}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.post("/find", { ibn: isbn });
        if (res.data.status) setData(res.data);
      } catch (e) {
        setData({ status: false, type: "catch", error: "" + e });
      }
    }
    getData();
  }, [isbn]);

  return <>{isbn}</>;
}

export default BookDetails;
