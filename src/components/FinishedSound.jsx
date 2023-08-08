/** @format */

import React, { useEffect, useRef } from "react";

const FinishedSound = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return <audio ref={audioRef} src={src} />;
};

export default FinishedSound;
