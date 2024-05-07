import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 pb-20 pt-10 md:px-0">
      <div className="mb-10 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div>
          <Image
            src={"/nazhoir.png"}
            alt=""
            width={64}
            height={64}
            className="h-16 w-16 overflow-hidden rounded-full bg-white grayscale"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Nazhoir</h1>
          <p>
            Writer, Proggrammer, and Teacher 
          </p>
        </div>
      </div>
      <p>
        Driven programmer and writers taking on every challenge with gusto.
        Firmly believes that success is not just about the end result, but the
        journey itself. Ready for anything.
      </p>
    </main>
  );
}
