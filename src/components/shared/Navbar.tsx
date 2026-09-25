import { useState } from "react";

import logo from "../../assets/logo-text.png";

const NAV_LINKS = [

{ href: "#home", label: "Home" },

{ href: "#technologies", label: "Technologies" },

{ href: "#projects", label: "Projects" },

{ href: "#about", label: "About" },

{ href: "#contact", label: "Contact" },

];

const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

return (

<header className="w-full border-b border-slate-100 bg-white">

<div className="relative mx-auto flex h-[53px] max-w-[1080px] items-center justify-between px-4 sm:px-6">

<a

href="#home"

className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center md:static md:left-auto md:top-auto md:translate-x-0 md:translate-y-0"

>

<img src={logo} alt="Dev Stack" className="h-auto w-[88px] object-contain" />

</a>

<button

type="button"

className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"

aria-label={isMenuOpen ? "Close menu" : "Open menu"}

aria-expanded={isMenuOpen}

onClick={() => setIsMenuOpen((open) => !open)}

>

<span

className={`h-[2px] w-6 rounded-full bg-slate-600 transition-transform duration-200 ${

isMenuOpen ? "translate-y-[7px] rotate-45" : ""

}`}

/>

<span

className={`h-[2px] w-6 rounded-full bg-slate-600 transition-opacity duration-200 ${

isMenuOpen ? "opacity-0" : "opacity-100"

}`}

/>

<span

className={`h-[2px] w-6 rounded-full bg-slate-600 transition-transform duration-200 ${

isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""

}`}

/>

</button>

<nav className="hidden md:block">

<ul className="flex items-center gap-6">

<li>

<a href="#home" className="text-sm font-medium text-pink-600">

Home

</a>

</li>

{NAV_LINKS.slice(1).map((link) => (

<li key={link.href}>

<a

href={link.href}

className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"

>

{link.label}

</a>

</li>

))}

</ul>

</nav>

<div className="flex items-center gap-2 sm:gap-4">

<a

href="#"

className="text-xs font-medium text-slate-600 transition-colors hover:text-pink-600 sm:text-sm"

>

Sign In

</a>

<a

href="#"

className="rounded-full bg-pink-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-pink-700 sm:px-3.5 sm:text-sm"

>

Sign Up

</a>

</div>

</div>

{isMenuOpen && (

<div className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden">

<ul className="flex flex-col gap-1">

{NAV_LINKS.map((link) => (

<li key={link.href}>

<a

href={link.href}

onClick={() => setIsMenuOpen(false)}

className="block rounded-md px-2 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-pink-50 hover:text-pink-600"

>

{link.label}

</a>

</li>

))}

</ul>

</div>

)}

</header>

);

};

export default Navbar;