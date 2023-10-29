import React from "react";

interface Props {
  btnCls?: string;
}

export default function NoProject({ btnCls }: Props) {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-semibold mb-8 pb-4 border-b-2 border-yellow-500">No Project Too Big Or Too Small</h1>
      <div className="flex flex-col md:flex-row text-justify gap-4">
        <p className="w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam fugiat maiores? Provident ullam facere a amet nisi ipsa quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse facere quia quas quos
          placeat, tempora maxime sunt ipsa odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, similique!
        </p>
        <p className="w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aperiam recusandae quisquam commodi rerum tempore eum voluptas, nemo, esse sit ab atque minima. Sed consectetur corrupti, eaque laborum temporibus quibusdam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Debitis sint vitae aliquam atque cum repudiandae nulla aut ratione iure eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nobis.
        </p>
      </div>
      <div className="flex flex-col md:flex-row item-center mt-4 text-justify gap-4">
        <p className="w-full md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illo!</p>
        <div className={`w-full md:w-1/2 ${btnCls}`}>
          <button className="border-2 border-slate-800 text-slate-900 px-6 rounded-md max-w-max py-3 max-h-max">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
