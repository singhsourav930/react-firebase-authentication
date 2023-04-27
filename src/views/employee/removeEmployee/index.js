import React, { useState } from "react";
import { Modal, Button } from "../../../theme/components";
import { deleteDoc } from "../../../configs/firebase";
import { employeeCollectionRef } from "../../../configs/collections";

function RemoveEmployee(props) {
  const {
    removeId = "",
    onClose = () => {},
    handleCallBackOnDeleted = () => {},
  } = props;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteDoc(employeeCollectionRef(removeId));
      handleCallBackOnDeleted();
      handleClose();
      setIsDeleting(false);
    } catch (e) {
      setIsDeleting(false);
      alert(e?.message || e);
    }
  };

  const handleClose = () => {
    if (!isDeleting) onClose();
  };
  return (
    <div>
      <Modal
        show={Boolean(removeId)}
        onClose={handleClose}
        title={<h4>Remove Employee</h4>}
        maxWidth="30"
        footer={
          <div>
            <Button onClick={handleDelete}>
              {isDeleting ? "Deleting..." : "Yes"}
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;
            <Button onClick={handleClose} outline>
              Cancel
            </Button>
          </div>
        }
      >
        Are you sure to remove Employee? Once Employee is deleted it can not be
        restore. Click on yes to confirm.
      </Modal>
    </div>
  );
}

export default RemoveEmployee;
