import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-12">
        <p className="text-orange-600 font-bold">Our services</p>
        <h1 className="text-5xl">Our services area</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          nam nostrum vitae assumenda, optio hic debitis quibusdam voluptas
          necessitatibus pariatur?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
