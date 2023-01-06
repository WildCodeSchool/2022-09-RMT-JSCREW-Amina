import React, { useState } from "react";

function Login() {
  const [connexion, setConnexion] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState();
  const handleSubmit = () => {
    const emailPattern = /^[^@] +@[^@]+.[^s@]+$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    if (
      emailPattern.test(connexion.email) &&
      passPattern.test(connexion.password)
    ) {
      setMessage("success");
    } else {
      setMessage("Wrong credentials");
    }
  };
  return (
    <div className="mt-40 flex flex-wrap">
      <div className="flex flex-col items-center  flex-nowrap w-1/3 h-2/3 bg-slate-200 rounded mx-auto mt-20 h-80">
        <h1 className="text-black font-semibold text-xl mt-2">
          Se connecter à l'espace administration
        </h1>
        <form className="flex flex-col items-center">
          <label htmlFor="email" className="mt-12 font-normal">
            Adresse email
          </label>
          <input
            id="email-address"
            type="email"
            name="email"
            value={connexion.email}
            onChange={(e) =>
              setConnexion({ ...connexion, email: e.target.value })
            }
            className="mt-2 outline-none"
          />
          <label htmlFor="password" className="mt-2 font-normal">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={connexion.password}
            onChange={(e) =>
              setConnexion({ ...connexion, password: e.target.value })
            }
            className="mt-2 outline-none"
          />
          <p>{message}</p>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-black font-normal bg-slate-400 rounded text-lg my-5 px-3 py-1"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
