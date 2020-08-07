const renderMembers = (members) => {
  let res = `\n  constructor(${members}){`;
  for (let i = 0; i < members.length; i++) {
    res += `\n    this.${members[i]} = ${members[i]}`;
  }

  return res + "\n  }";
};

const makeClass = (_class, members) => {
  console.log(`class ${_class}{${renderMembers(members)}\n}`);
};

module.exports = { makeClass };
