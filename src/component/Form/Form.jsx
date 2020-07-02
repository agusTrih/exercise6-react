import React, { useState } from "react";
import "./form.css";
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [skill, setSkill] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        alert(`Selamat Anda Telah Berhasil Mendaftar
        Nama: ${name} 
        Email: ${email} 
        Password: ${password} 
        Alamat: ${address} 
        Tgl-Lahir: ${date}
        Jenis kelamin: ${gender}
        Kemampuan: ${skill}`);
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="fullName">Nama: </label>
                <input
                    type="text"
                    name="name"
                    id="fullName"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <label htmlFor="address">Alamat: </label>
                <textarea
                    name="address"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                ></textarea>
                <label htmlFor="birthDate">Tgl Lahir: </label>
                <input
                    type="date"
                    name="date"
                    id="birthDate"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <div className="gender">
                    <label>Jenis kelamin: </label>
                    <span>Laki-laki</span>
                    <input
                        type="radio"
                        name="gender"
                        id="genderMale"
                        value="Laki-Laki"
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <span>Permpuan</span>
                    <input
                        type="radio"
                        name="gender"
                        id="genderFemale"
                        value="Perempuan"
                        onChange={(event) => setGender(event.target.value)}
                    />
                </div>
                <div className="skill">
                    <p>Skill: </p>
                    <span>Coding</span>
                    <input
                        type="checkbox"
                        name="skill"
                        id="coding"
                        value="Coding"
                        onChange={(event) => setSkill(event.target.value)}
                    />
                    <span>Design</span>
                    <input
                        type="checkbox"
                        name="skill"
                        id="design"
                        value="Design"
                        onChange={(event) => setSkill(event.target.value)}
                    />
                    <span>Gaming</span>
                    <input
                        type="checkbox"
                        name="skill"
                        id="gaming"
                        value="Gaming"
                        onChange={(event) => setSkill(event.target.value)}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;
