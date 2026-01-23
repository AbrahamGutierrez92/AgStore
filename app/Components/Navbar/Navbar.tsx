import BottomNav from "./BottomNav";
import MiddleNav from "./MiddleNav";


export default function Navbar() {
  return (
    <>
      <header className="w-full">
        <div className="hidden lg:block">
            <MiddleNav />
        </div>
        <BottomNav />
      </header>
    </>
  );
}
