class Constant {
  static sidebar = () => {
    const sidebarData = [
      {
        icon: "",
        name: "Dashboard",
        route: "/dashboard",
        key: "dashboard",
      },
      {
        icon: "",
        name: "Employees",
        route: "/employees",
        key: "employees",
      },
    ];
    return sidebarData;
  };
}

export { Constant };
