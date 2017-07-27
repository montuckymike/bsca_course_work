import React from "react";

const Content = (props) => {
  return(
    <div className="content-sec">
      <h3 className="sec-header"> All About Fresh Prince </h3>
      <p> { props.about } </p>
    </div>
  )
}


export default Content;
