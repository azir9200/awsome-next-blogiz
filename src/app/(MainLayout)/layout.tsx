
import { Navbar } from "@/src/components/shared/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
    
    </div>
  );
};

export default MainLayout;
