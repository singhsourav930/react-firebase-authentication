import React from "react";
import { Modal, Button } from "../../../theme/components";

function RemoveEmployee(props) {
  const { removeId = "", onClose = () => {} } = props;
  return (
    <div>
      <Modal
        show={Boolean(removeId)}
        onClose={onClose}
        title={<h4>Remove Member</h4>}
        maxWidth="400"
        footer={
          <div>
            <Button>Yes</Button> &nbsp;&nbsp;&nbsp;
            <Button onClick={onClose} outline>
              Cancel
            </Button>
          </div>
        }
      >
        Are you sure to remove User? Once User is deleted it can not be
        restore. Click on yes to confirm.
      </Modal>
    </div>
  );
}

export default RemoveEmployee;
