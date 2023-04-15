import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import Button from "../ui/Button";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addNewProduct(product, url);
      })
      .then(() => {
        setSuccess("Product added Succcessfully");
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      })
      .finally(() => {
        setIsUploading(false);
      });
  };
  return (
    <section className="w-full text-center">
      <h2 className="text-3xl font-bold my-4">Add New Product</h2>
      {success && <p className="my-2">✅{success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-4"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          required
          onChange={handleChange}
          placeholder="Product Title"
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="Price"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="Category"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="Description"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="Options (seperated by Comma)"
          required
          onChange={handleChange}
        />
        <Button
          isUploading={isUploading}
          text={isUploading ? "Uploading..." : "Upload Product"}
        />
      </form>
    </section>
  );
}
