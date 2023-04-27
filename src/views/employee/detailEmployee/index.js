import React, { useState, useEffect } from "react";
import { Modal, Button } from "../../../theme/components";
import { getDoc } from "../../../configs/firebase";
import { employeeCollectionRef } from "../../../configs/collections";

const formData = {
  id: "",
  name: "",
  dob: "",
  atWork: false,
  email: "",
  salary: "",
};

function DetailEmployee(props) {
  const [form, setForm] = useState(formData);

  const { show = false, onClose = () => {}, employeeId = "" } = props;
  const [isFeatchingEmployeeDetail, setIsFeatchingEmployeeDetail] =
    useState(false);

  useEffect(() => {
    try {
      const getEmployeeDetail = async () => {
        setIsFeatchingEmployeeDetail(true);
        const employeeData = await getDoc(employeeCollectionRef(employeeId));
        if (employeeData && employeeData.data()) {
          setForm(employeeData.data());
        }
        setIsFeatchingEmployeeDetail(false);
      };
      getEmployeeDetail();
    } catch (e) {
      setIsFeatchingEmployeeDetail(false);
      alert(e?.message || e);
    }
  }, [employeeId]);

  return (
    <div>
      <Modal
        show={show}
        onClose={onClose}
        title={
          <h4>
            {isFeatchingEmployeeDetail ? "Fetching..." : "Employee Detail"}
          </h4>
        }
      >
        <div>
          <div>
            <strong>Employee Id:</strong> {employeeId}
          </div>
          <div>
            <strong>Employee Name:</strong> {form.name}
          </div>
          <div>
            <strong>Email:</strong> {form.email}
          </div>
          <div>
            <strong>Date of birth:</strong> {form.dob}
          </div>
          <div>
            <strong>At work</strong>
            {form?.atWork ? "Yes" : "No"}
          </div>
          <div>
            <strong>Salary:</strong> {form.salary}
          </div>
        </div>

        <Button className="mt-2" small onClick={onClose}>
          Close
        </Button>
      </Modal>
    </div>
  );
}

export default DetailEmployee;
