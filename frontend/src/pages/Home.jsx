import Profil from "@assets/Profil.jpg";

function Home() {
  return (
    <div className="flex justify-center">
      <h3>Hello !</h3>
      <h1 className="text-white text-2xl">Je suis Amina HAKIMI</h1>
      <span className="text-white">Développeuse web</span>
      <img src={Profil} alt="profil" width="100" />
    </div>
  );
}

export default Home;
