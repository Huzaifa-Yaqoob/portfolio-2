import Section from "@/components/common/Section";
import NavLinks from "@/components/sections/navbar/NavLinks";

function Navbar() {
  return (
    <Section asChild={true}>
      <nav className={"text-primary flex items-center justify-between"}>
        {"{ •_x }"}
        <div className={"text-primary font-mono text-xl"}>Welcome!</div>
        <NavLinks />
      </nav>
    </Section>
  );
}

export default Navbar;
