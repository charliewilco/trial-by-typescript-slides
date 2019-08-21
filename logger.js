import React from "react";

export default function Logger(props) {
  React.useEffect(() => {
    console.log(props);
  }, []);

  return null;
}
