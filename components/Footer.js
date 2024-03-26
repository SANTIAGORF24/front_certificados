import React, { useMemo } from "react";
import { usePathname } from "next/navigation.js";

export function Footer() {
  const location = usePathname();
  const navigationFooter = useMemo(() => {
    if (location === "/admin_panel") {
      return <></>;
    }

    return (
      <div className="h-[6%]">
        <div className="bg-[#4a53a0] flex justify-around items-center h-full">
          <p>Ministerio del Depote - GIT TICS</p>
          <p>contacto@mindeporte.gov.co</p>
          <p>57 01 8000 910237</p>
          <p>Avenida Cra 68 No 55-65 Bogotá DC, Colombia</p>
        </div>
      </div>
    );
  }, [location]);
  return navigationFooter;
}
