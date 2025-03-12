import { headers } from "next/headers";
import Link from "next/link";

export default async function Private() {
  const headersList = headers();

  // Fetch user details
  const user =
    headersList.get("x-ms-client-principal-name") || "❌ Not Authenticated";
  const userId = headersList.get("x-ms-client-principal-id") || "❌ No User ID";
  const roles = headersList.get("x-ms-client-principal-roles")?.split(",") || [
    "❌ No Roles",
  ];
  const userAgent = headersList.get("user-agent") || "Unknown";

  // Debugging: Log headers to console
  console.log("Headers:", headersList);

  // Redirect if unauthenticated
  if (user === "❌ Not Authenticated") {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>
          Please <Link href='/login'>log in</Link> to access this page.
        </p>
      </div>
    );
  }

  return (
    <div className='p-8'>
      <Link href='/'>Home</Link>
      <Link href='/public'>Public</Link>
      <h1>Private Page</h1>
      <p>Welcome, {user}</p>
      <p>User ID: {userId}</p>
      <p>Roles: {roles.join(", ")}</p>
      <p>User Agent: {userAgent}</p>
    </div>
  );
}
