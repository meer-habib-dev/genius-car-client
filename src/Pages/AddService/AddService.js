import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://warm-inlet-08582.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Form Submitted");
          reset();
        }
      });
  };

  return (
    <div className="add-form">
      <h1>This is service section</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Enter Description"
          {...register("description", { required: true })}
        />
        <input placeholder="Price" type="number" {...register("price")} />
        <input type="text" {...register("img")} placeholder="Image Url" />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
