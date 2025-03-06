import ideaIcon from "../assets/idea.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__background">
        <img className="header__icon" src={ideaIcon} alt="" />
        <img className="header__icon" src={ideaIcon} alt="" />
        <img className="header__icon" src={ideaIcon} alt="" />
        <img className="header__icon" src={ideaIcon} alt="" />
      </div>
      <h1 className="main-title">
        Never run out of <span className="text-highlight">ideas</span> for your{" "}
        <br></br>
        next coding project!
      </h1>
    </header>
  );
};

export default Header;
