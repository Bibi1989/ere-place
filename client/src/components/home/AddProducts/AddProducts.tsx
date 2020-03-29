import React from "react";
import axios from "axios";
import { Div } from "./AddProductStyle";
import dotenv from "dotenv";

dotenv.config();

const upload_preset: any = process.env.REACT_APP_UPLOAD_PRESET;
const cloud_base_name: any = process.env.REACT_APP_CLOUDINARY_BASE_URL;

const AddProducts = () => {
  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [showButton, setShowButton] = React.useState(false);
  const [form, setForm] = React.useState({
    title: "",
    category: "",
    category_type: "",
    description: "",
    price: "",
    location: "",
    stock: ""
  });
  let d: any = [];
  const hancha = (e: any) => {
    const data = new FormData();
    setShowButton(false);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", upload_preset);
    axios
      .post(cloud_base_name, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        d.concat(res.data.secure_url);
        setImageUrl([...imageUrl, res.data.secure_url]);
        setShowButton(true);
      })
      .catch(err => console.log(err.response));
  };
  console.log({ d, imageUrl });
  const handleInput = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const postProduct = async (body: any) => {
    await axios.post(`https://ere-place-api.herokuapp.com/api/products`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6ImE0MzRhNTkyLWNmZTgtNDczZC1hOGZlLTU5ZGE2N2FlOTU2ZCIsImZpcnN0X25hbWUiOiJCaWJpIiwibGFzdF9uYW1lIjoiQnJvIiwicGhvbmUiOiIxMjM0NTY3ODkwMSIsImVtYWlsIjoiYmliaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR5UDVkWTcwT2YvLmkuZUx4eGhmZjN1N3d6WURZV1dtaU9tQkZldnBqUzlFSmlYZUtkNGZNbSIsInVzZXJfaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9iaWJpMTk4OTE2L2ltYWdlL3VwbG9hZC92MTU2NjI4NDc4Ny9zYW1wbGUuanBnIiwiaXNfc2VsbGVyIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wMy0wMlQyMTo1Njo1NC41MzNaIn1dLCJpYXQiOjE1ODMxODYyMTR9.Xh2SCMuLa1nX1dCvu0M6yhncfq4_SauQdnYT4VPXSf0`
      }
    });
  };
  const onsubmit = (e: any) => {
    e.preventDefault();
    let image = JSON.stringify(imageUrl);
    const data = {
      ...form,
      image_url: image
    };
    postProduct(data);
  };

  return (
    <Div>
      <form onSubmit={onsubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          onChange={handleInput}
        />
        <input
          type='text'
          name='category'
          placeholder='category'
          onChange={handleInput}
        />
        <input
          type='text'
          name='category_type'
          placeholder='category_type'
          onChange={handleInput}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          onChange={handleInput}
        />
        <input
          type='text'
          name='price'
          placeholder='price'
          onChange={handleInput}
        />
        <input
          type='text'
          name='location'
          placeholder='location'
          onChange={handleInput}
        />
        <input
          type='text'
          name='stock'
          placeholder='stock'
          onChange={handleInput}
        />
        <input type='file' name='file' onChange={hancha} />
        {imageUrl.length !== 0 && showButton && (
          <button type='submit'>Submit</button>
        )}
      </form>
    </Div>
  );
};

export default AddProducts;
