import React, {useEffect} from "react";
import ReactPlayer from "react-player";

const Iframe = () => {
  useEffect(() => {
    if (window.location.protocol === 'https:') {
      document.cookie = 'myCookie=value; SameSite=None; Secure';
    } else {
      document.cookie = 'myCookie=value; SameSite=None;';
    }
  }, []);
 
  return (
    <div className="container mx-auto w-[100%] h-[500px] my-[50px] rounded overflow-hidden">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=p7Y2hFw5qJQ"
        muted
        loop
        width={"100%"} 
        height={"100%"}
      />
    </div>
  );
};

export default Iframe;
