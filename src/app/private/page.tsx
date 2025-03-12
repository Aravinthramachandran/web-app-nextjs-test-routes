import { headers } from "next/headers";
import Link from "next/link";

export default async function Private() {
  const headersList = await headers();
  const user = headersList.get("x-ms-client-principal-name") || "Guest";
  const userId = headersList.get("x-ms-client-principal-id") || "N/A";
  const roles =
    headersList.get("x-ms-client-principal-roles")?.split(",") || [];
  const userAgent = headersList.get("user-agent") || "N/A";
  const ip = headersList.get("x-ms-client-principal-ip") || "N/A";
  const country = headersList.get("x-ms-client-principal-country") || "N/A";
  const city = headersList.get("x-ms-client-principal-city") || "N/A";
  const lat = headersList.get("x-ms-client-principal-lat") || "N/A";
  const lon = headersList.get("x-ms-client-principal-lon") || "N/A";
  const timezone = headersList.get("x-ms-client-principal-timezone") || "N/A";
  const currency = headersList.get("x-ms-client-principal-currency") || "N/A";
  const lang = headersList.get("x-ms-client-principal-lang") || "N/A";
  const region = headersList.get("x-ms-client-principal-region") || "N/A";
  const org = headersList.get("x-ms-client-principal-org") || "N/A";
  const as = headersList.get("x-ms-client-principal-as") || "N/A";
  const isp = headersList.get("x-ms-client-principal-isp") || "N/A";
  const domain = headersList.get("x-ms-client-principal-domain") || "N/A";
  const mobile = headersList.get("x-ms-client-principal-mobile") || "N/A";
  const desktop = headersList.get("x-ms-client-principal-desktop") || "N/A";
  const tablet = headersList.get("x-ms-client-principal-tablet") || "N/A";
  const bot = headersList.get("x-ms-client-principal-bot") || "N/A";
  const os = headersList.get("x-ms-client-principal-os") || "N/A";
  const osVersion =
    headersList.get("x-ms-client-principal-os-version") || "N/A";
  return (
    <div className='flex items-center justify-items-center  p-8 pb-20 gap-9 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Link href='/'>Home</Link>
      <Link href='/public'>Public</Link>
      <Link href='/data'>Data</Link>

      <div>
        <h1>Private Page</h1>
        <p>Welcome {user}</p>
        <p>User ID: {userId}</p>
        <p>Roles: {roles.join(", ")}</p>
        <p>User Agent: {userAgent}</p>
        <p>IP: {ip}</p>
        <p>Country: {country}</p>
        <p>City: {city}</p>
        <p>Latitude: {lat}</p>
        <p>Longitude: {lon}</p>
        <p>Timezone: {timezone}</p>
        <p>Currency: {currency}</p>
        <p>Language: {lang}</p>
        <p>Region: {region}</p>
        <p>Organization: {org}</p>
        <p>AS: {as}</p>
        <p>ISP: {isp}</p>
        <p>Domain: {domain}</p>
        <p>Mobile: {mobile}</p>
        <p>Desktop: {desktop}</p>
        <p>Tablet: {tablet}</p>
        <p>Bot: {bot}</p>
        <p>OS: {os}</p>
        <p>OS Version: {osVersion}</p>
      </div>
    </div>
  );
}
