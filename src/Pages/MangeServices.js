import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MangeServices = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://warm-inlet-08582.herokuapp.com/services/")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://warm-inlet-08582.herokuapp.com/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Data Remove");
          const remaining = booking.filter((service) => service._id !== id);
          setBooking(remaining);
        }
      });
  };

  return (
    <div>
      <h1>This is mange</h1>
      {booking.map((service) => (
        <div key={service._id}>
          {service.name}
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MangeServices;
