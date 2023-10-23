import React from "react";

export default function ProjectsPage() {
  return (
    <section>
      <div className="w-full h-screen object-cover bg-center bg-home1 flex justify-center items-center">
        <div className="text-white w-4/5">
          <div className="border-l-8 border-yellow-500 flex gap-8 items-center px-4 mb-8">
            <h1 className="md:text-6xl font-semibold">Monarch HQ Project</h1>
            <div className="text-sm md:text-lg md:font-semibold">
              <h4>Date: 22 September 2023</h4>
              <h4>Client: Monarch Group</h4>
              <h4>Project Type: Building Renovation</h4>
            </div>
          </div>
          <p className="text-sm md:text-lg md:font-semibold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo voluptatibus nulla fugit! Molestias laborum facere vero doloribus id repellat, neque quaerat tempora est voluptas amet pariatur vel eius modi?
          </p>
        </div>
      </div>
    </section>
  );
}
