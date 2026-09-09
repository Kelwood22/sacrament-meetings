import NavLinks from "./NavLinks";

export default function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <header className="bg-blue-900 text-white p-4">
      <h1 className="text-2xl font-bold">
        Woodland Hills Ward
      </h1>

      <p>{today}</p>

      <NavLinks />
    </header>
  );
}