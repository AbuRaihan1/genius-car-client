import React from "react";
import parts from "../../../../assets/images/about_us/parts.jpg";
import person from "../../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero mt-10 mb-44">
      <div className="hero-content flex-col lg:flex-row pb-10">
        <div className="lg:w-1/2 relative">
          <img src={person} alt="" className=" rounded-lg shadow-2xl w-4/5" />
          <img
            src={parts}
            alt=""
            className="absolute rounded-lg h-full w-3/5 right-5 top-1/2"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
