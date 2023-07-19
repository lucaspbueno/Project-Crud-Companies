import profileSvg from '../pictures/profile.svg'
export default function Header() {
  return (
    <header className="w-100 d-flex justify-content-between position-fixed top-0 border shadow p-2 mb-5 bg-body-tertiary z-3">
      <h1>
        Project
      </h1>
        <img src={ profileSvg } alt="Ícone de perfil"/>
    </header>
  );
}