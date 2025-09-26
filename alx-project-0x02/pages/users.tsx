import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import type { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Posts", href: "/posts" },
    { label: "Users", href: "/users" },
  ];

  return (
    <>
      <Header title="ALX Project" links={navLinks} />

      <Head>
        <title>Users | ALX Project</title>
      </Head>

      <section className="flex flex-col items-center justify-center min-h-[20vh] text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Users Page 👥</h1>
        <p className="text-lg text-gray-700">
          This page displays all users fetched from the API.
        </p>
      </section>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </>
  );
}

// Fetch users at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: { users },
  };
}
