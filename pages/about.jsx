import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div className="mt-5">
      <h1 className="text-4xl text-center text-gray-100">About this App</h1>
      <p className="text-center mt-2">
        This is a Next.js app that uses the Github API to search for users and
        display their profile information.
      </p>
      <p className="text-center">
        This app was created by{" "}
        <Link href="/user/kadir-akar" className="text-primary">
          Kadir Akar
        </Link>
        <img
          src="https://avatars.githubusercontent.com/u/73611059?v=4"
          alt="kadir-akar"
          className="rounded-xl m-auto w-80 h-80 mt-10"
        />
      </p>
    </div>
  );
};
export default about;
