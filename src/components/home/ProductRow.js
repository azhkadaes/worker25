import Image from "next/image";

export default function Products() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-lg font-semibold mb-4 text-gray-800">New Products</p>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <Image
          src="/tame.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
        <Image
          src="/abbey.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
        <Image
          src="/kiss.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
        <Image
          src="/gm.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Image
          src="/rumors.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
        <Image
          src="/am.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
        <Image
          src="/kitty.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
        <Image
          src="/amm.png"
          alt=""
          width={100}
          height={100}
          className="md border"
        />
      </div>
    </div>
  );
}
