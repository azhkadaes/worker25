import ProfileBar from "@/components/home/ProfileBar";
import Image from "next/image";
import Products from "@/components/home/ProductRow";
import Record from "@/components/home/Record";

export default function Home() {
  return (
    <div>
      <ProfileBar />
      <Products />
      <Record />
    </div>
  );
}
