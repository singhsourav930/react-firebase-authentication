import React, { useState, useEffect } from "react";
import { Validate } from "../../../helpers";
import { Modal, Input, Button, Switch } from "../../../theme/components";
import { addDoc, updateDoc, getDoc } from "../../../configs/firebase";
import { employeeCollectionRef } from "../../../configs/collections";

const formData = {
  name: "",
  dob: "",
  atWork: false,
  email: "",
  salary: "",
};

function AddEditEmployee(props) {
  const [form, setForm] = useState(formData);
  const [isCreateUpdateEmployeeLoading, setIsCreateUpdateEmployeeLoading] =
    useState(false);
  const {
    show = false,
    onClose = () => {},
    editId = "",
    handleCallBackOnCompletedAddEdit = () => {},
  } = props;
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [isFeatchingEmployeeDetail, setIsFeatchingEmployeeDetail] =
    useState(false);

  useEffect(() => {
    try {
      const getEmployeeDetail = async () => {
        setIsFeatchingEmployeeDetail(true);
        const employeeData = await getDoc(employeeCollectionRef(editId));
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
  }, [editId]);

  const handleChange = (e) => {
    if (e.target.name === "salary") {
      e.target.value =
        Math.round((Number(e.target.value) + Number.EPSILON) * 100) / 100;
    }
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "atWork" ? !form?.atWork : e.target.value,
    });
  };

  const handleValidation = () => {
    let errorStructure = {
      errorEmail: "",
      errorName: "",
      errorDob: "",
      errorSalary: "",
      isValidated: false,
    };

    if (!isFormSubmit) return errorStructure;

    if (!form?.email) {
      errorStructure = { ...errorStructure, errorEmail: "Please enter email" };
    } else if (!Validate.email(form?.email)) {
      errorStructure = {
        ...errorStructure,
        errorEmail: "Please enter valid email",
      };
    }

    if (!form?.name) {
      errorStructure = {
        ...errorStructure,
        errorName: "Please enter first name",
      };
    } else if (!Validate.onlyCharacters(form?.name)) {
      errorStructure = {
        ...errorStructure,
        errorName: "Only characters are allowed",
      };
    } else if (!Validate.minLength(form?.name, 2)) {
      errorStructure = {
        ...errorStructure,
        errorName: "Min length should be 2",
      };
    }
    if (!form?.dob) {
      errorStructure = {
        ...errorStructure,
        errorDob: "Please enter DOB",
      };
    }
    if (!form?.salary) {
      errorStructure = {
        ...errorStructure,
        errorSalary: "Please enter Salary",
      };
    } else if (form?.salary && form?.salary === 0) {
      errorStructure = {
        ...errorStructure,
        errorSalary: "Salary must be greater than 0",
      };
    } else if (!Validate.checkDecimal(form?.salary)) {
      errorStructure = {
        ...errorStructure,
        errorSalary: "Salary must be in decimal form",
      };
    }

    if (
      !errorStructure?.errorEmail &&
      !errorStructure?.errorName &&
      !errorStructure?.errorDob &&
      !errorStructure?.errorSalary
    ) {
      errorStructure = {
        ...errorStructure,
        isValidated: true,
      };
    }

    return errorStructure;
  };

  useEffect(() => {
    if (editId) {
      setForm({
        ...form,
      });
    }
  }, [editId]);

  // On Create Update Users Details 1st Step
  const onSubmit = () => {
    setIsFormSubmit(Math.random());
  };

  //On Change Form Submit 2nd Step
  useEffect(() => {
    if (isFormSubmit) {
      handleSubmit();
    }
  }, [isFormSubmit]);

  const handleSubmit = async () => {
    try {
      const { isValidated } = handleValidation();
      if (!isValidated) return;

      setIsCreateUpdateEmployeeLoading(true);
      if (editId) {
        await updateDoc(employeeCollectionRef(editId), form);
        commonFunctions();
        alert("Employee Updated successfully!");
      } else {
        await addDoc(employeeCollectionRef(), form);
        commonFunctions();
        alert("Employee Added successfully!");
      }
      setIsCreateUpdateEmployeeLoading(false);
    } catch (e) {
      alert(e?.message || e);
      setIsCreateUpdateEmployeeLoading(false);
    }
  };

  const commonFunctions = () => {
    onClose();
    handleCallBackOnCompletedAddEdit();
  };

  const { errorName, errorDob, errorEmail, errorSalary } = handleValidation();

  return (
    <div>
      <Modal
        show={show}
        onClose={onClose}
        title={
          <h4>
            {isFeatchingEmployeeDetail ? (
              "Fetching.."
            ) : (
              <>{editId ? "Edit" : "Create New"} Employee</>
            )}
          </h4>
        }
      >
        <div className="row">
          <div className="col-6">
            <Input
              className="mb-2"
              label="Employee Name"
              name="name"
              placeholder="Employee name"
              maxWidth="100%"
              onChange={handleChange}
              value={form.name}
              isError={Boolean(errorName)}
              errorMessage={errorName}
            />
          </div>
          <div className="col-6">
            <Input
              className="mb-2"
              label="Email"
              name="email"
              placeholder="Email"
              maxWidth="100%"
              onChange={handleChange}
              disabled={editId}
              value={form.email}
              isError={Boolean(errorEmail)}
              errorMessage={errorEmail}
            />
          </div>
          <div className="col-6">
            <Input
              className="mb-2"
              label="Date of birth"
              name="dob"
              placeholder="DOB"
              maxWidth="100%"
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              type="date"
              value={form.dob}
              isError={Boolean(errorDob)}
              errorMessage={errorDob}
            />
          </div>
          <div className="col-6">
            <div> At work</div>
            <div className="pt-2">
              <Switch
                checked={form?.atWork}
                {...(form?.atWork ? { secondary: "secondary" } : "")}
                name="atWork"
                onChange={handleChange}
              />
            </div>
          </div>{" "}
          <div className="col-6">
            <Input
              className="mb-2"
              label="Salary"
              name="salary"
              placeholder=""
              maxWidth="100%"
              onChange={handleChange}
              type="number"
              value={form.salary}
              isError={Boolean(errorSalary)}
              errorMessage={errorSalary}
            />
          </div>
        </div>

        <Button
          className="mt-2"
          small
          disabled={isCreateUpdateEmployeeLoading}
          onClick={onSubmit}
        >
          {isCreateUpdateEmployeeLoading
            ? "Loading..."
            : editId
            ? "Update Employee"
            : "Create New Employee"}
        </Button>
      </Modal>
    </div>
  );
}

export default AddEditEmployee;
