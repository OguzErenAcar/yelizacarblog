import React from "react";

function Carousel() {
  return (
    <>
    <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full h-[700px]">
    <img
      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
      className="w-full h-full object-cover object-center" />
  </div> 
   <div id="item2" className="carousel-item w-full h-[700px]">
    <img
      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
      className="w-full h-full object-cover object-center" />
  </div> 
   <div id="item3" className="carousel-item w-full h-[700px]">
    <img
      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
      className="w-full h-full object-cover object-center" />
  </div> 
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
    </>
  );
}

export default Carousel;
