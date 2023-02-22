const mapper = (str, type) => {
  if (type === "date") {
    return str;
  }
  return str;
};

const map= {
    columns: [
      { label: "Acciones", name: "", format: mapper, type: "text" },
      { label: "Marca", name: "marca", format: mapper, type: "text" },
      { label: "Pedido", name: "noPedido", format: mapper, type: "text" },
      { label: "DNI", name: "dni", format: mapper, type: "text" },
      { label: "Nombre", name: "nombre", format: mapper, type: "text" },
      { label: "Zona", name: "zona", format: mapper, type: "text" },
      { label: "Mail Plan", name: "mailPlan", format: mapper, type: "text" },
      { label: "Campaña", name: "campana", format: mapper, type: "text" },
      { label: "Estado", name: "estado", format: mapper, type: "text" },
      { label: "F. Envío", name: "fechaEnviadoSAP", format: mapper, type: "text" },
      { label: "F. Reenviado", name: "fechaReenviadoSAP", format: mapper, type: "text" },
      
    ],
  };


  
  export { map };
  