export default function Home() {
  return (
    <>
      <div class="flex justify-between x m-8">
        <img
          class="size-20 "
          src="https://img.freepik.com/free-vector/coffee-beans-heart-shape_78370-7108.jpg?semt=ais_hybrid&w=740"
          alt="ChitChat Logo"
        />
        <div class="flex  gap-4 items-center font-bold text-2xl">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
      <hr></hr>
      <div class="flex gap-4 m-8 justify-between flex-wrap">
        <div class="w-160 h-100 border border-red-600 flex justify-between">
          <div class="w-80 h-80 m-8 border border-green-600 rounded-full "></div>
          <div class="w-70 h-70 m-8 border border-green-600">
            <div>garchig</div>
            <div>Tailbar</div>
            <div>Read more</div>
          </div>
        </div>
      </div>
    </>
  );
}
