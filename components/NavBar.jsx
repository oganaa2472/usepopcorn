import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult";
export default function NavBar({movies}) {
   
    return  (
    <nav className="nav-bar">
        <Logo/>
        <Search />
        <NumResult/>
      </nav>)

}