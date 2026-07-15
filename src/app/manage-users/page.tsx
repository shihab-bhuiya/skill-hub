type User = {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

async function getUsers(): Promise<User[]> {
  const res = await fetch(`${process.env.SERVER_PUBLIC_URL}/users`, {
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
      <h1 className="mb-6 text-3xl font-bold">
        Manage Users
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Email</th>
            <th className="border p-3 text-left">Role</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}