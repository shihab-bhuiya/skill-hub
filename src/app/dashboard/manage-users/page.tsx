import DeleteUserButton from "@/components/DashBoard/DeleteUserButton";
import Link from "next/link";

type User = {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

async function getUsers(): Promise<User[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function ManageUsersPage() {
  const users = await getUsers();

  return (
    <div className="rounded-lg bg-white p-6 shadow">
    <div className="mb-6 flex items-center justify-between">
  <h1 className="text-3xl font-bold">
    Manage Users
  </h1>

  <p className="rounded-md bg-blue-100 px-4 py-2 font-medium text-blue-700">
    Total Users: {users.length}
  </p>
</div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Email</th>
            <th className="border p-3 text-left">Role</th>
            <th className="border p-3 text-left">Selection</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border p-3">{user.name}</td>
              <td className="border p-3">{user.email}</td>
              <td className="border p-3">
                {user.role === "admin" ? (
                  <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-600">
                    Admin
                  </span>
                ) : (
                  <span className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-600">
                    User
                  </span>
                )}
              </td>
              <td className="border p-3">
  <div className="flex gap-2">
  <Link
  href={`/dashboard/manage-users/${user._id}`}
  className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
><button>View </button>
  
</Link>

    {/* Delete Button Control */}
    <DeleteUserButton id={user._id}/>
  </div>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}