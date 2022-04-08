import React, { useState } from "react";
import "./FileCreator.css";
import axios from "axios";

function FileCreator() {
  const [productImg, setProductImg] = useState("");
  const [productCost, setProductCost] = useState("");
  const [productSale, setProductSale] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productType, setProductType] = useState("carts");
  const [productName, setProductName] = useState("");

  const uploadProduct = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/create/products", {
        productImg: productImg,
        productCost: productCost,
        productSale: productSale,
        productTitle: productTitle,
        productType: productType,
        productName: productName,
      })
      .then((createdProduct) => console.log(createdProduct))
      .catch((err) => console.error(err));
    setProductImg("");
    setProductCost("");
    setProductSale("");
    setProductTitle("");
    setProductType("carts");
    setProductName("");
  };
  return (
    <div className="file__creator">
      <form onSubmit={uploadProduct}>
        <div className="create__file">
          <div className="left">
            <p className="input_p">Product Img * :</p>
            <input
              className="file_name_input"
              type="text"
              placeholder="Product Img"
              value={productImg}
              onChange={(e) => setProductImg(e.target.value)}
            />

            <p className="input_p">Product Cost * :</p>
            <input
              className="file_name_input"
              type="number"
              placeholder="Product Cost"
              value={productCost}
              onChange={(e) => setProductCost(e.target.value)}
            />

            <p className="input_p">Product Sale * :</p>
            <input
              className="file_name_input"
              type="number"
              placeholder="Product Sale "
              value={productSale}
              onChange={(e) => setProductSale(e.target.value)}
            />
          </div>
          <div className="right">
            <p className="input_p">Product Title * :</p>
            <input
              className="file_name_input"
              type="text"
              placeholder="Product Title "
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <p className="input_p">Product Name * :</p>
            <input
              className="file_name_input"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <div className="productSelects">
              <div className="productType">
                <p className="input_p">Product Type * :</p>

                <label htmlFor="sizes"></label>
                <select
                  className="file_size_type"
                  id="sizes"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  <option value="carts">Carts</option>
                  <option value="furniture">Furniture</option>
                  <option value="tecnology">Tecnology</option>
                  <option value="bevarage">Bevarage</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className="send_file" type="submit">
          Create File
        </button>
      </form>
    </div>
  );
}

export default FileCreator;
