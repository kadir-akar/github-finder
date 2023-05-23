import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Users = (props) => {
  const [loading, setLoading] = useState(false);
  const userHandler = (e) => {
    e.preventDefault();
    router.push(e.target.href);
    setLoading(true);
  };

  const router = useRouter();
  return (
    <div>
      {loading ? (
        <div className="card w-60 bg-base-50 shadow-xlm-5 pt-5 text-center m-w-auto p-4  rounded-md flex items-center justify-center">
          <Image src={"/loading-gif.gif"} alt="my gif" height={50} width={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 content-center gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 mt- px-4 m-10 flex-col ">
          {props.users.map((user) => (
            //for each user in the users array, create a card with the user's avatar, username, and a link to their profile
            <div
              key={user.id}
              className=" hover:border-dotted border-2 border-gray-600 card  bg-base-50 shadow-xlm-5 pt-5 text-center m-w-auto
            p-4 rounded-md flex items-center justify-center"
            >
              <img
                className="rounded-xl"
                src={user.avatar_url}
                alt={user.login}
                style={{ width: "100px" }}
              />
              <div className="card-body items-center text-center">
                <p className="card-title mb-5 mt-0">{user.login}</p>
                <Link
                  onClick={userHandler}
                  className="card-title btn text-xl hover:btn-primary"
                  href={`user/${user.login}`}
                >
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Users;
