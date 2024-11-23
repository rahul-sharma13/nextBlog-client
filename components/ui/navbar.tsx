import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("access_token")?.value;

  return (
    <nav className="h-16 flex flex-row justify-between items-center px-20 bg-primary text-primary-foreground">
      <Link href="/" className="text-2xl">
        Blogs
      </Link>

      {/* account */}
      {authToken ? (
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
      ) : (
        <Link href="/login" className="text-lg">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
