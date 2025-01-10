import React from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
const Container = () => {
  return (
    <div className=" border p-4 rounded-md  border-slate-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <div>{/* <Image alt="profile" src={null} /> */}</div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p>name</p>
            <p>gmail</p>
          </div>
        </div>
        <FaRegCopy />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia velit
        dolor fugiat ut eveniet illo nihil tempora quo autem suscipit dolore
        aspernatur, molestias magnam veritatis quos sunt! Voluptates, facere
        deleniti.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Non, sint commodi quo dolorum officia alias. Cumque, enim magni facere
        ipsum magnam harum eligendi reiciendis, facilis repellat quis voluptatum
        qui repellendus?
      </p>
      <div></div>
    </div>
  );
};

export default Container;
