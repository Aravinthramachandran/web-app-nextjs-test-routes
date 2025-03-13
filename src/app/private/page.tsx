import { headers } from "next/headers";
import Link from "next/link";

export default async function Private() {
  const headersList = await headers();

  // Fetch user details
  const user =
    headersList.get("x-ms-client-principal-name") || "❌ Not Authenticated";
  const userId = headersList.get("x-ms-client-principal-id") || "❌ No User ID";
  const roles = headersList.get("x-ms-client-principal-roles")?.split(",") || [
    "❌ No Roles",
  ];
  const userAgent = headersList.get("user-agent") || "Unknown";
  const token =
    headersList.get("x-ms-token-aad-access-token") || "❌ No Access Token";

  const encodedPrincipal = headersList.get("x-ms-client-principal");

  let roless = ["❌ No Roles"];
  let clientPrincipal = null;
  if (encodedPrincipal) {
    const decodedJson = Buffer.from(encodedPrincipal, "base64").toString(
      "utf-8"
    );
    clientPrincipal = JSON.parse(decodedJson);

    // Extract roles if available
    roless =
      clientPrincipal?.claims
        ?.filter((c: any) => c.typ.includes("role")) // Role claim
        ?.map((c: any) => c.val) || [];
  }

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
      <p>Access Token: {token}</p>
      <p>Roless: {roless.join(", ")}</p>

      <div>
        <h1>Headers List</h1>
        <pre>
          {JSON.stringify(Object.fromEntries(headersList.entries()), null, 2)}
        </pre>
      </div>

      <div>
        <h1>Decoded Client Principal</h1>
        <pre>{JSON.stringify(clientPrincipal, null, 2)}</pre>
      </div>
    </div>
  );
}
