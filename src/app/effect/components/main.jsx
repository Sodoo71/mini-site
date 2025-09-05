import Image from "next/image";
export const Main = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center min-h-screen">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 justify-center">
          <div className="space-y-4 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover Amazing Products
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Shop the latest trends and find the perfect items for your
              lifestyle. Quality products at competitive prices.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <a href="/products">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 shadow-xs">
                  Shop Now
                </button>
              </a>
              <button className="border bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-6 shadow-xs">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-3 mx-auto justify-center">
            <Image
              src="/Frame_14.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            <Image
              src="/Frame_10.jpg"
              alt="her"
              className="object-cover rounded-lg "
              width={200}
              height={200}
            />
            <Image
              src="/Frame_18.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            <Image
              src="/Frame_19.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            <Image
              src="/Frame_20.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            <Image
              src="/Frame_21.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            <Image
              src="/Frame_22.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            <Image
              src="/Frame_29.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            <Image
              src="/Frame_12.jpg"
              alt="her"
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
