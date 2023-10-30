import React from "react";

import Image from "next/image";
export default async function loading() {

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center ">
        <Image src="/hand-loading.gif" alt="ss"  width='300' height='500' />
      </div>
    </>
  );
}
