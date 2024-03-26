import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation"; // Importar desde next/router

export function Plantilla() {
  const router = useRouter();
  const { nit, name, domicilio, representante, status } = router.query || {};

  const [nitValue, setNitValue] = useState(nit || "");
  const [nombreValue, setNombreValue] = useState(name || "");
  const [domicilioValue, setDomicilioValue] = useState(domicilio || "");
  const [representanteValue, setRepresentanteValue] = useState(
    representante || ""
  );
  const [statusValue, setStatusValue] = useState(status || "");

  useEffect(() => {
    if (router.query) {
      setNitValue(router.query.nit || "");
      setNombreValue(router.query.name || "");
      setDomicilioValue(router.query.domicilio || "");
      setRepresentanteValue(router.query.representante || "");
      setStatusValue(router.query.status || "");
    }
  }, [router.query]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-5/6">
        <div className="text-black text-2xl flex items-start justify-start w-4/5">
          <h3>Organismos</h3>
        </div>
        {nit && name && domicilio && representante && status ? (
          <div className="w-4/5 flex flex-col justify-between">
            <div className="flex w-3/5 flex-wrap md:flex-nowrap gap-4 py-5">
              <Input
                type="text"
                label="NIT"
                value={nitValue}
                onChange={(e) => setNitValue(e.target.value)}
              />
            </div>

            <div className="flex w-3/5 flex-wrap md:flex-nowrap gap-4 py-5">
              <Input
                type="text"
                label="Nombre"
                value={nombreValue}
                onChange={(e) => setNombreValue(e.target.value)}
              />
            </div>

            <div className="flex w-3/5 flex-wrap md:flex-nowrap gap -4 py-5">
              <Input
                type="text"
                label="Domicilio"
                value={domicilioValue}
                onChange={(e) => setDomicilioValue(e.target.value)}
              />
            </div>

            <div className="flex w-3/5 flex-wrap md:flex-nowrap gap-4 py-5">
              <Input
                type="text"
                label="Representante"
                value={representanteValue}
                onChange={(e) => setRepresentanteValue(e.target.value)}
              />
            </div>

            <div className="flex w-3/5 flex-wrap md:flex-nowrap gap-4 py-5">
              <Input
                type="text"
                label="Estado"
                value={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <p className="text-black">Cargando...</p>
        )}
      </div>
    </>
  );
}
