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
        <div class="w-160 h-100 border border-red-600 ">
          
        </div>
        <div class="w-160 h-100 border border-green-600 "></div>
        <div class="w-160 h-100 border border-blue-600 "></div>
        <div class="w-160 h-100 border border-pink-600 "></div>
        <div class="w-160 h-100 border border-indigo-600 "></div>
        <div class="w-160 h-100 border border-indigo-600 "></div>
      </div>
    </>
  );
}
