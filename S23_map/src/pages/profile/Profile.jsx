import { useState } from "react";
import "./Profile.css";
function Profile() {
  let [image, setImage] = useState(
    "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
  );

  let [name, setName] = useState("Raj Verma");

  let [gender, setGender] = useState("male");

  let [email, setEmail] = useState("raj@gmail.com");

  const changeProfileToFemale = () => {
    setImage(
      "https://i.pinimg.com/originals/40/16/5e/40165e0f2ac8e6920e35be1911a38751.jpg"
    );

    setName("Priya Sharma");
    setGender("female");
    setEmail("priya@gmail.com");
  };

  const changeProfileToMale = () => {
    setName("Raj Verma");
    setImage(
      "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
    );
    setGender("male");
    setEmail("raj@gmail.com");
  };

  return (
    <div className="profileContainer">
      <div className="leftPanel">
        <img src={image} width={"100%"} height={"100%"} />
      </div>
      <div className="rightPanel">
        <dl>
          <dt>
            <b>NAME</b>
          </dt>
          <dd>{name}</dd>
          <dt>
            <b>GENDER</b>
          </dt>
          <dd>{gender}</dd>
          <dt>
            <b>EMAIL</b>
          </dt>
          <dd>{email}</dd>
          <dt>
            <b>DESCRIPTION</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            cupiditate. Exercitationem delectus iste, rerum quo ipsum et laborum
            aliquam harum deserunt dolor incidunt quaerat, optio officiis vero
            perferendis enim. Quaerat amet cum aperiam incidunt deserunt ullam,
            voluptas quod nulla ab inventore repellat asperiores autem numquam
            deleniti dicta, eligendi recusandae culpa. aliquam harum deserunt
            dolor incidunt quaerat, optio officiis vero perferendis enim.
            Quaerat amet cum aperiam incidunt deserunt ullam, voluptas quod
            nulla ab inventore repellat asperiores autem numquam deleniti dicta,
            eligendi recusandae culpa.
          </dd>
        </dl>
        <button onClick={changeProfileToMale}>Raj Verma</button>
        <button onClick={changeProfileToFemale}>Priya Sharma</button>
      </div>
    </div>
  );
}

export default Profile;
