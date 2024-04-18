import { useEffect, useContext } from "react";
import { DataContext } from "../context/data-provider";
import "./lobby.css";

const Lobby = () => {
  const { account, setAccount } = useContext(DataContext);

  const Logout = () => {
    // Clear the account from local storage and state
    localStorage.removeItem("account");
    setAccount("");
  };

  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      // If account exists in local storage, set it in the state
      setAccount(storedAccount);
    }

    const form = document.getElementById("join-form");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (account) {
        let inviteCode = e.target.invite_link.value;
        window.location = `/second?room=${inviteCode}`;
      } else {
        alert("Please login to use our service");
      }
    };

    form.addEventListener("submit", handleSubmit);

    // Cleanup the event listener when the component is unmounted
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []); // Only run this effect once on mount

  return (
    <div className="lobbybody">
      <div className="navbar">
        <div>P2PVC</div>
        <div style={{ display: "flex", gap: "2em" }}>
          {account ? <span>{account}</span> : <span></span>}
          {account ? (
            <span onClick={Logout} style={{ cursor: "pointer" }}>
              Logout
            </span>
          ) : (
            <span>
              {" "}
              <a
                href="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <u>Login</u>
              </a>
            </span>
          )}
          <div></div>
        </div>
      </div>
      <div className="lobbybody2">
        <main id="lobby-container">
          <div id="form-container">
            <div id="form_container_header">
              <p>👋Create OR Join a Room</p>
            </div>
            <div id="form_content_wrapper">
              <form id="join-form">
                <input type="text" name="invite_link" required></input>
                <input type="submit" value="Join Room"></input>
                {/* <center style={{padding:"1em",paddingTop:"2em"}}>Made By MANGO</center> */}
              </form>
            </div>
          </div>
        </main>
      </div>
      {/* made by MANGO */}
    </div>
  );
};

export default Lobby;
