import React, { useEffect, useMemo, useState } from "react";
import { UserBox, SearchBox } from "./employee.styled";
import {
  Table,
  Card,
  ContentHeader,
  Input,
  Tooltip,
  Dropdown,
} from "../../theme/components";
import AddEditUser from "./addEditEmployee";
import DetailEmployee from "./detailEmployee";
import { getDocs } from "../../configs/firebase";
import { employeeCollectionRef } from "../../configs/collections";
import { CiMenuKebab } from "react-icons/ci";
import { Validate } from "../../helpers";
import { Utils } from "../../utility/utils";
import RemoveUser from "./removeEmployee";

const SEARCH_MIN_LENGTH = 3;
const SORT_BY = {
  ASC: "ASC",
  DESC: "DESC",
};

const paginationStucture = {
  currentPage: 1,
  perPageItems: 5,
};

function Employees(props) {
  const [show, setShow] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState("");
  const [removeId, setRemoveId] = useState("");
  const [editId, setEditId] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [isFetchingEmployeesList, setIsFetchingEmployeesList] = useState(false);
  const [search, setSearch] = useState("");
  const [sortName, setSortName] = useState("");
  const [orderBy, setOrderBy] = useState();
  const [pagination, setPagination] = useState(paginationStucture);
  const [employeeData, setEmployeeData] = useState({});

  const getEmployees = () => {
    try {
      const getEmployees = async () => {
        setIsFetchingEmployeesList(true);
        const data = await getDocs(employeeCollectionRef());
        const employeeData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPagination({
          ...pagination,
          totalItems: (employeeData || []).length,
        });
        setEmployeeData(employeeData);

        setIsFetchingEmployeesList(false);
      };
      getEmployees();
    } catch (e) {
      setIsFetchingEmployeesList(false);
      alert(e?.message || e);
    }
  };

  useEffect(getEmployees, []);

  const handleOnClose = () => {
    setShow(false);
    setEmployeeId("");
    setEditId("");
  };

  const handleCallBackOnCompletedAddEditDelete = () => getEmployees();

  const handleOnCloseRemoveMember = () => {
    setRemoveId("");
  };

  const onPageChange = (currentPage) => {
    setPagination({ ...pagination, currentPage });
  };

  const filteredEmployeeData = useMemo(() => {
    let employeeDataCopy = employeeData;

    if (
      employeeData &&
      employeeData.length > 0 &&
      Validate.minLength(search, SEARCH_MIN_LENGTH)
    ) {
      employeeDataCopy = employeeData.filter((data) => {
        return data?.email.match(search) || data?.name.match(search);
      });
    }

    if (sortName && employeeDataCopy && employeeDataCopy.length > 0) {
      employeeDataCopy = employeeDataCopy.sort((a, b) => {
        if (orderBy) {
          if (orderBy === SORT_BY.ASC) {
            return a[sortName].localeCompare(b[sortName]);
          }
          if (orderBy === SORT_BY.DESC) {
            return b[sortName].localeCompare(a[sortName]);
          }
        }
        return a[sortName].localeCompare(b[sortName]);
      });
    }

    const indexOfLastPage = pagination.currentPage * pagination.perPageItems;
    const indexOfFirstPage = indexOfLastPage - pagination.perPageItems;

    let displayEmployeeData = employeeDataCopy;
    if (displayEmployeeData && displayEmployeeData.length > 0) {
      displayEmployeeData = displayEmployeeData.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
    }

    return { employeeDataCopy, displayEmployeeData };
  }, [search, employeeData, sortName, orderBy, pagination]);

  useEffect(() => {
    setPagination({
      ...pagination,
      totalItems:
        search.length >= SEARCH_MIN_LENGTH
          ? (filteredEmployeeData?.employeeDataCopy || []).length
          : (employeeData || []).length,
    });
  }, [search]);

  const columns = [
    {
      key: "name",
      title: "Employee Name",
      render: (data, type, row) => {
        return type?.name;
      },
    },
    {
      key: "email",
      title: "Email",
      render: (data, type, row) => {
        return type?.email;
      },
    },

    {
      key: "actions",
      title: "Actions",
      render: (data, type, row) => {
        return (
          <div>
            <div id={type?.id} onClick={() => setActiveTooltipId(type?.id)}>
              <CiMenuKebab />
            </div>
            {activeTooltipId === type?.id && (
              <Tooltip
                list={[
                  {
                    render: (
                      <div
                        className="px-3 py-2"
                        onClick={() => {
                          setEditId(type?.id);
                          setShow(true);
                        }}
                      >
                        Edit
                      </div>
                    ),
                  },
                  {
                    render: (
                      <div
                        className="px-3 py-2"
                        onClick={() => {
                          setEmployeeId(type?.id);
                          setShow(true);
                        }}
                      >
                        View
                      </div>
                    ),
                  },
                  {
                    render: (
                      <div
                        className="px-3 py-2"
                        onClick={() => {
                          setRemoveId(type?.id);
                        }}
                      >
                        Delete
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

  const handleSearch = Utils.debounce((e) => {
    setSearch(e.target.value);
    setPagination({ ...pagination, ...paginationStucture });
  });

  const searchError =
    search && search.length < SEARCH_MIN_LENGTH
      ? `Minimum ${SEARCH_MIN_LENGTH} characters Required`
      : "";

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
      <Card>
        <div className="d-flex align-items-center justify-content-end mb-3">
          <div className="d-flex align-items-center pe-4">
            <div className="pe-3">Sort by</div>

            <Dropdown
              onChange={(values) =>
                setSortName(values && values.length > 0 ? values[0].value : "")
              }
              options={[
                {
                  value: "name",
                  label: "Name",
                },
                {
                  value: "email",
                  label: "Email",
                },
              ]}
            />
          </div>
          <div className="d-flex align-items-center pe-4">
            <div className="pe-3">Order by</div>

            <Dropdown
              onChange={(values) =>
                setOrderBy(values && values.length > 0 ? values[0].value : "")
              }
              options={[
                {
                  value: SORT_BY.ASC,
                  label: SORT_BY.ASC,
                },
                {
                  value: SORT_BY.DESC,
                  label: SORT_BY.DESC,
                },
              ]}
            />
          </div>
          <div>
            <SearchBox>
              <span>Search</span>
              <Input
                onChange={handleSearch}
                isError={Boolean(searchError)}
                errorMessage={searchError}
              />
            </SearchBox>
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredEmployeeData?.displayEmployeeData}
          isFetching={isFetchingEmployeesList}
          {...pagination}
          onPageChange={onPageChange}
        />
      </Card>
      {show && !employeeId && (
        <AddEditUser
          show={show}
          onClose={handleOnClose}
          editId={editId}
          handleCallBackOnCompletedAddEdit={
            handleCallBackOnCompletedAddEditDelete
          }
        />
      )}
      {show && employeeId && (
        <DetailEmployee
          show={show}
          onClose={handleOnClose}
          employeeId={employeeId}
        />
      )}
      {removeId && (
        <RemoveUser
          removeId={removeId}
          onClose={handleOnCloseRemoveMember}
          handleCallBackOnDeleted={handleCallBackOnCompletedAddEditDelete}
        />
      )}
    </UserBox>
  );
}

export default Employees;
