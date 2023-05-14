import React from "react";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="a" className="w-full rounded-2xl"  />
      </div>
      <div className="absolute flex justify-end transform left-20 top-14">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end w-2/5 transform left-20 top-64">
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          voluptatum quisquam ipsa dolore necessitatibus.
        </p>
      </div>

      <div className="absolute flex justify-start w-2/5 transform left-20 top-80 gap-5">
        <button className="btn btn-active btn-secondary">Button</button>
        <button className="btn btn-outline btn-accent">Button</button>
      </div>

      <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-5">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
