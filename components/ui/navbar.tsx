import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="h-16 flex flex-row justify-between items-center px-20 bg-primary text-primary-foreground">
      <span className="text-2xl">Blogs</span>

      {/* account */}
      <Link href="/dashboard">
        <Avatar>
          <AvatarImage
            src="https://th.bing.com/th/id/OIP.GHGGLYe7gDfZUzF_tElxiQHaHa?rs=1&pid=ImgDetMain"
            alt="@shadcn"
            width={5}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </nav>
  );
};

export default Navbar;
