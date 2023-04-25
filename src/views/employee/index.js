import React, { useEffect, useState } from "react";
import { UserBox, SearchBox } from "./employee.styled";
import {
  Table,
  Card,
  ContentHeader,
  Input,
  Tooltip,
} from "../../theme/components";
import AddEditUser from "./addEditEmployee";

import RemoveUser from "./removeEmployee";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Employees(props) {
  let query = useQuery();
  const [show, setShow] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState("");
  const [removeId, setRemoveId] = useState("");
  const [editId, setEditId] = useState("");
  const [search, setSearch] = useState("");
  const [isUserDataFetching, setIsUserDataFetching] = useState(true);
  const [sortby, setSortBy] = useState("Sales Dashboard");
  const [usersData, setUsersData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreateUpdateUserLoading, setIsCreateUpdateUserLoading] =
    useState(false);
  const navigate = useNavigate();

  const handleOnClose = () => {
    setShow(false);
  };

  const handleOnCloseRemoveMember = () => {
    setRemoveId("");
  };

  //Columns Declaration For The User Table
  const columns = [
    {
      key: "firstName",
      title: "Name",
      render: (data, type, row) => {
        if (type?.users) {
          return type?.users[0]?.firstName + " " + type?.users[0]?.lastName;
        } else {
          return type ? type?.firstName + " " + type?.lastName : "N/A";
        }
      },
    },
    {
      key: "email",
      title: "Email",
      render: (data, type, row) => {
        if (type?.users) {
          return type?.users[0]?.email;
        } else {
          return type ? type?.email : "N/A";
        }
      },
    },

    {
      key: "actions",
      title: "Actions",
      render: (data, type, row) => {
        return (
          <div>
            {activeTooltipId === type?.id && (
              <Tooltip
                list={[
                  {
                    render: sortby && (
                      <div
                        onClick={() => {
                          setEditId(type);
                          setShow(true);
                        }}
                      >
                        Edit
                      </div>
                    ),
                  },
                ]}
                activeTooltipId={type?.id}
                closeActiveTooltipId={() => {
                  setActiveTooltipId("");
                }}
              />
            )}
          </div>
        );
      },
    },
  ];

  return (
    <UserBox>
      <ContentHeader
        title="Employees"
        btnText="Create New Employee"
        btnAction={() => {
          setEditId("");
          setShow(true);
        }}
      />
      <br />
      <br />
      <Card>
        <SearchBox>
          <span>Search</span>
          <Input onChange={(e) => setSearch(e.target.value)} />
        </SearchBox>
        <Table
          totalItems={usersData?.totalItems}
          columns={columns}
          data={usersData?.items}
          totalPages={usersData?.totalPages}
          pageNo={usersData?.currentPage}
          onPageChange={(currentPage) => {
            setCurrentPage(currentPage);
          }}
        />
      </Card>
      {show && (
        <AddEditUser
          show={show}
          onClose={handleOnClose}
          editId={editId}
          isCreateUpdateUserLoading={isCreateUpdateUserLoading}
        />
      )}
      {removeId && (
        <RemoveUser removeId={removeId} onClose={handleOnCloseRemoveMember} />
      )}
    </UserBox>
  );
}

export default Employees;
