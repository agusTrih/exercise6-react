import React, { useState } from "react";
import swal from "sweetalert";
import image from "../../assets/img/image.svg";
import "./form.css";
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [skill, setSkill] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        swal({
            title: "Selamat Anda Telah Berhasil Mendaftar",
            text: `
            Nama: ${name} 
            Email: ${email} 
            Password: ${password} 
            Alamat: ${address} 
            Tgl-Lahir: ${date}
            Jenis kelamin: ${gender}
            Kemampuan: ${skill}`,
            icon: "success",
            button: "Okay!",
        });
    }

    return (
        <div className="formRegistrasi">
            <div className="img">
                <img src={image} width="500px" alt="background" />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Form Registarsion</h1>

                <h3>Name: </h3>
                <input
                    type="text"
                    name="name"
                    id="fullName"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <h3>Email: </h3>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <h3>Password:</h3>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <h3>Alamat :</h3>
                <textarea
                    name="address"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                ></textarea>
                <h3>Tanggal Lahir:</h3>
                <input
                    type="date"
                    name="date"
                    id="birthDate"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />

                <h3>Jenis Kelamin:</h3>
                <div className="gender">
                    <span>Laki-laki</span>
                    <input
                        type="radio"
                        name="gender"
                        id="genderMale"
                        value="Laki-Laki"
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <span>Perempuan</span>
                    <input
                        type="radio"
                        name="gender"
                        id="genderFemale"
                        value="Perempuan"
                        onChange={(event) => setGender(event.target.value)}
                    />
                </div>

                <h3>Skill: </h3>
                <div className="skills">
                    <span>Coding</span>
                    <input
                        type="checkbox"
                        name="skill"
                        id="coding"
                        value="Coding"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSkill([...skill, event.target.value]);
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skil) => skil !== event.target.value
                                    )
                                );
                            }
                        }}
                    />
                    <span>Design</span>
                    <input
                        type="checkbox"
                        name="skill"
                        id="design"
                        value="Design"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSkill([...skill, event.target.value]);
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skil) => skil !== event.target.value
                                    )
                                );
                            }
                        }}
                    />
                    <span>Gaming</span>
                    <input
                        type="checkbox"
                        name="skill"
                        id="gaming"
                        value="Gaming"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSkill([...skill, event.target.value]);
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skil) => skil !== event.target.value
                                    )
                                );
                            }
                        }}
                    />
                </div>

                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;
