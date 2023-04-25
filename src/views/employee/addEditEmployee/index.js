import React, { useState, useEffect } from "react";
import { Validate } from "../../../helpers";
import { Modal, Input, Button, TextArea } from "../../../theme/components";

const formData = {
  firstName: "",
  lastName: "",
  email: "",
  packageId: "",
  amountPaid: "",
  amountDue: "",
  notes: "",
  phoneNumber: "",
  expiryDate: "",
};

function AddEditEmployee(props) {
  const [form, setForm] = useState(formData);
  const {
    show = false,
    onClose = () => {},
    editId = "",
    packageDropdownList = [],
    isCreateUpdateUserLoading,
  } = props;
  const [isFormSubmit, setIsFormSubmit] = useState(false);


  const handleChange = (e) => {
    //Caliculate the due amount on change amountPaid Based On OnChange
    if (e.target.name === "amountPaid") {
      if (!form?.packageId) {
        alert("plz select package");
        return;
      }
      const packageDetails = packageDropdownList?.filter(
        (packageId) => packageId?.id === form?.packageId
      );
      const dueEmount = packageDetails[0]?.price - e.target.value;
      //Check User Entered Value Should Be Lower then he Package Price
      if (e.target.value > packageDetails[0]?.price) {
        alert("Plz Enter Valid Amount");
        return;
      }
      setForm({
        ...form,
        amountDue: dueEmount > 0 ? dueEmount : 0, //Prevent Negative Values
        [e.target.name]:
          e.target.value.trim() && parseInt(e.target.value.trim()),
      });
    } else {
      setForm({
        ...form,
        [e.target.name]:
          e.target.name === "notes" ? e.target.value : e.target.value.trim(),
      });
    }
  };

  // ****************************
  // * Validation Hanlder Start *
  // ****************************
  const handleValidation = () => {
    let errorStructure = {
      errorEmail: "",
      errorFirstName: "",
      errorLastName: "",
      isValidated: false,
      errorPackageId: "",
      errorAmountPaid: "",
      errornotes: "",
      errorPhoneNumber: "",
      errorExpiryDate: "",
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

    if (!form?.firstName) {
      errorStructure = {
        ...errorStructure,
        errorFirstName: "Please enter first name",
      };
    } else if (!Validate.minLength(form?.firstName, 2)) {
      errorStructure = {
        ...errorStructure,
        errorFirstName: "Please enter valid first name",
      };
    }

    if (!form?.lastName) {
      errorStructure = {
        ...errorStructure,
        errorLastName: "Please enter last name",
      };
    } else if (!Validate.minLength(form?.lastName, 2)) {
      errorStructure = {
        ...errorStructure,
        errorLastName: "Please enter valid last name",
      };
    }

    if (!form?.packageId) {
      errorStructure = {
        ...errorStructure,
        errorPackageId: "Please select package",
      };
    } else if (!form?.packageId) {
      errorStructure = {
        ...errorStructure,
        errorPackageId: "Please select package",
      };
    }

    if (!form?.amountPaid) {
      errorStructure = {
        ...errorStructure,
        errorAmountPaid: "Please enter amount paid",
      };
    } else if (!form?.amountPaid) {
      errorStructure = {
        ...errorStructure,
        errorAmountPaid: "Please enter amount paid",
      };
    }
    if (!form?.expiryDate) {
      errorStructure = {
        ...errorStructure,
        errorExpiryDate: "Please enter expire date",
      };
    } else if (!form?.expiryDate) {
      errorStructure = {
        ...errorStructure,
        errorExpiryDate: "Please enter expire date",
      };
    }

    if (
      !errorStructure?.errorEmail &&
      !errorStructure?.errorFirstName &&
      !errorStructure?.errorLastName
    ) {
      errorStructure = {
        ...errorStructure,
        isValidated: true,
      };
    }

    if (!form?.notes) {
      errorStructure = { ...errorStructure, errornotes: "Please enter notes" };
    } else if (!Validate.minLength(form?.notes, 2)) {
      errorStructure = {
        ...errorStructure,
        errornotes: "Please enter valid notes",
      };
    }
    if (!form?.phoneNumber) {
      errorStructure = {
        ...errorStructure,
        errorPhoneNumber: "Please enter Phone Number",
      };
    } else if (!Validate.minLength(form?.phoneNumber, 12)) {
      errorStructure = {
        ...errorStructure,
        errorPhoneNumber: "Please enter valid Phone Number",
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

  //User Update And Creation 3rd Step
  const handleSubmit = () => {
    const { isValidated } = handleValidation();
    if (!isValidated) return;
    const params = {
      ...form,
    };
    if (editId) {
    } else {
    }
  };
  const { errorFirstName, errorLastName, errorEmail, errornotes } =
    handleValidation();

  return (
    <div>
      <Modal
        show={show}
        onClose={onClose}
        title={<h4>{editId ? "Edit" : "Create New"} Employee</h4>}
      >
        <Input
          className="mb-2"
          label="First Name"
          name="firstName"
          placeholder="First name"
          maxWidth="100%"
          onChange={handleChange}
          disabled={editId}
          value={form.firstName}
          isError={Boolean(errorFirstName)}
          errorMessage={errorFirstName}
        />
        <Input
          className="mb-2"
          label="Last Name"
          name="lastName"
          placeholder="Last name"
          maxWidth="100%"
          disabled={editId}
          onChange={handleChange}
          value={form.lastName}
          isError={Boolean(errorLastName)}
          errorMessage={errorLastName}
        />

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

        <TextArea
          className="mb-2"
          label="Please enter the deadline of the pending payment"
          name="notes"
          placeholder="Notes"
          maxWidth="100%"
          onChange={handleChange}
          value={form?.notes}
          isError={Boolean(errornotes)}
          errorMessage={errornotes}
        />

        <Button
          className="mt-2"
          small
          disabled={isCreateUpdateUserLoading}
          onClick={onSubmit}
        >
          {isCreateUpdateUserLoading
            ? "Loading..."
            : editId
            ? "Update User"
            : "Create User"}
        </Button>
      </Modal>
    </div>
  );
}

export default AddEditEmployee;
