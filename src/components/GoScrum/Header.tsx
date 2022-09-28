import Logo from "../../assets/GoScrum 1.png";

const Header = () => {
  return (
    <div className="shadow-lg bg-[#FAFAFA]">
      <div className="flex flex-row mx-3 h-[50px] items-center font-semibold">
        <img src={Logo} />
        <div className="flex-1" />
        <div className="flex flex-row gap-x-4">
          <button className="font-ligh text-sm rounded bg-button-primary w-[70px] h-[25px] border-2 text-white drop-shadow-xl hover:bg-white hover:border-button-primary hover:text-button-primary">
            Donar
          </button>
          <span>Tareas creadas: 3</span>
          <span>User</span>
          <button className="text-button-primary">X</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
