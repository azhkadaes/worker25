import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-4">
            <p className="text-4xl font-bold text-gray-800">Record</p>
            <p className="text-4xl font-bold text-gray-800">& vinyl</p>
            <p className="text-3xl font-bold text-gray-800">market</p>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            More
          </button>
        </div>
        <Image
          src="/image.png"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full border ml-4"
        />
      </div>
    </div>
  );
}
