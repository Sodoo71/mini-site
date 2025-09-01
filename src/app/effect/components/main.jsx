export const Main = () => {
  return (
    <section class="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div class="container px-4 md:px-6">
        <div class="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div class="space-y-4">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover Amazing Products
            </h1>
            <p class="max-w-[600px] text-muted-foreground md:text-xl">
              Shop the latest trends and find the perfect items for your
              lifestyle. Quality products at competitive prices.
            </p>

            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="/products">
                <button class="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 shadow-xs">
                  Shop Now
                </button>
              </a>
              <button class="border bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-6 shadow-xs">
                Learn More
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center mx-auto">
            <img
              src=""
              alt="Hero Image"
              class="object-cover rounded-lg"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
