const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "NIT", uid: "nit", sortable: true },
  { name: "DOMICILIO", uid: "domicilio" },
  { name: "REPRESENTANTE LEGAL", uid: "representante" },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "ACCIONES", uid: "actions" },
];

const statusOptions = [
  { name: "Activo", uid: "active" },
  { name: "Pausado", uid: "paused" },
  { name: "Inactivo", uid: "inactive" },
];
export { columns, statusOptions };
