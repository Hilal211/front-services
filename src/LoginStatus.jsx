import { getCookie } from "./cookies";
import { useHistory } from "react-router";

export default function LoginStatus() {


  let history = useHistory();


  if (!getCookie('token')) {
    history.push("/login");
  } 
      return(
      <>
      </>
      );
  }
