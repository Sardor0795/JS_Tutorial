// CRUD --> C - Create, R - Read, U - Update, D - Delete

// Update ---

let users = [
    { id: 1, name: "John", year: 1990, job: "Teacher" },
    { id: 2, name: "Jim", year: 1990, job: "Driver" },
    { id: 3, name: "Ann", year: 2000, job: "Teacher" },
    { id: 4, name: "Jane", year: 1990, job: "Teacher" },
    { id: 5, name: "Bill", year: 1980, job: "Worker" },
    { id: 6, name: "Jack", year: 1997, job: "Pilot" },
  ];

  console.log(users);

  const updateUser = (id, type, value) => {
    let res = users.map((v) => (v.id === id ? { ...v, [type]: value } : v));
    return (users = res);
  };
  updateUser(4, "name", "Angela");
  updateUser(4, "year", 1960);
  updateUser(4, "job", "Cleaner");
  updateUser(6, "job", "Cleaner");

  console.log(users);

  // Create ---

  // const addItem = (user) => {
  //   return (users = [...users, user]);
  // };
  // addItem({ id: 7, name: "Bale", year: 1989, job: "Footballer" });

  // Delete ---

  // const delUser = (id) => {
  //   let res = users.filter((v) => v.id !== id);
  //   return (users = res);
  // };
  // delUser(6);

  // Read -----

  // const Filter = ({ type, value }) => {
  //   let res = users.filter((obj) => `$${obj[type]}`.includes(value));
  //   return (users = res);
  // };
  // // Filter({ type: "name", value: "Jim" });
  // // Filter({ type: "year", value: '1990' });
  // // Filter({ type: "job", value: "Teacher" });

  //  -------------------

  // const getByYear = (year) => {
  //   let res = users.filter((v) => `${v.year}`.includes(year));
  //   return (users = res);
  // };
  // getByYear(1990);

  // const getByYear = (year) => {
  //   let res = users.filter((v) => v.year == year);
  //   return (users = res);
  // };
  // getByYear(1990);

  // ---------------------

  // const getByName = (input) => {
  //   let res = users.filter((v) => v.name.includes(input));
  //   return (users = res);
  // };
  // getByName("Ann");

  // const sortByName = () => {
  //   let res = users.sort((a, b) => a.name.localeCompare(b.name));
  //   return (users = res);
  // };
  // sortByName();

  // const sortByYear = () => {
  //   let res = users.sort((a, b) => a.year - b.year);
  //   return (users = res);
  // };
  // sortByYear();
