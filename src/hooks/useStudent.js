import { STUDENT } from "../constants/student";

export default function useStudent() {
  const fields = [
    { label: "Nombre", value: STUDENT.nombre },
    { label: "Carnet", value: STUDENT.carnet },
    { label: "Sección y grupo", value: `${STUDENT.seccion} - ${STUDENT.grupo}` },
  ];

  return { student: STUDENT, fields };
}
