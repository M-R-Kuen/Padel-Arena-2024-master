import React from "react";

const FooterPadelCarousel = () => {
  const repeat = 20;

  const renderRepeatPadel = () => {
    const elements = [];
    for (let i = 0; i < repeat; i++) {
      elements.push(
        <h3
          key={`padel-${i}`}
          className="flex items-center justify-center px-12 py-2 mt-5 text-lg text-center text-white uppercase w-52 radhiumz">
          PadelArena
        </h3>
      );
      if (i < repeat - 1) {
        elements.push(
          <h3 key={`plus-${i}`} className="mx-5 my-2 text-xl text-white uppercase mt-7 radhiumz">
            +
          </h3>
        );
      }
    }
    return elements;
  };

  return (
    <div className="flex items-center w-full h-12 overflow-hidden">
      <div className="flex w-full animate-scroll">{renderRepeatPadel()}</div>
    </div>
  );
};

export default FooterPadelCarousel;
