import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        src="/images/underconstruction.jpg" 
        alt="A cute little cat dressed as a construction worker"
        width={300} 
        height={300}
        className="mb-8 object-cover rounded-full shadow-2xl shadow-pink-500/40 [mask-image:radial-gradient(circle,white_60%,transparent_100%)]"
        ></Image>
      <h1 className="text-4xl font-bold text-gray-800">This page is under construction. </h1>
      <h2 className="text-xl text-gray-600 mt-2"> Please check back in later!</h2>
    </div>
  );
}