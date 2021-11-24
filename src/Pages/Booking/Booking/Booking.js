import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`https://warm-inlet-08582.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div>
      <h2>this is booking: {serviceId}</h2>
      <h3>Name:{booking.name}</h3>
    </div>
  );
};

export default Booking;
