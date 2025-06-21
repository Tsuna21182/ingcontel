import React from "react";

function BtnPrincipal({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <button
      className={`bg-AzulCorporativo transition-all duration-300 text-Blanco hover:bg-Blanco hover:text-black cursor-pointer py-3 px-8 rounded-2xl text-lg font-semibold ${className}`}
    >
      {name}
    </button>
  );
}

export default BtnPrincipal;
