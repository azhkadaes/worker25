import Image from "next/image";

export default function Record() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-3">
        <p className="text-base font-semibold text-gray-800">Record</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Image
          src="/record.png"
          alt=""
          width={100}
          height={100}
          className="rounded-md border"
        />
        <Image
          src="/record.png"
          alt=""
          width={100}
          height={100}
          className="rounded-md border"
        />
        <Image
          src="/record.png"
          alt=""
          width={100}
          height={100}
          className="rounded-md border"
        />
        <Image
          src="/record.png"
          alt=""
          width={100}
          height={100}
          className="rounded-md border"
        />
      </div>
    </div>
  );
}
