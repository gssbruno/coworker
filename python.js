const makeClass = (className, ...params) => {
  let _class = `class ${className}:\n    def __init__(self,${params.join(
    ","
  )}):`;

  for (let i = 0; i < params.length; i++) {
    const param = params[i];

    _class += `\n        self.${param} = ${param}`;
  }
  return _class;
};

const makeClassKwargs = (className, ...params) => {
  let _class = `class ${className}:\n    def __init__(self, **kwargs):`;

  console.log(params.length);
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    console.log(param);

    _class += `\n        self.${param} = kwargs.get('${param}')`;
  }
  return _class;
};

module.exports = { makeClass, makeClassKwargs };
