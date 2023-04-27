import { collection, database, doc } from "./firebase";

const employeeCollectionRef = (employeeId = "") => {
  if (employeeId) {
    return doc(database, "employees", employeeId);
  }
  return collection(database, "employees");
};

export { employeeCollectionRef };
