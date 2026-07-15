type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

async function getUser(id: string): Promise<User> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div className="max-w-2xl rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        User Details
      </h1>

      <div className="space-y-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
}