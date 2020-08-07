args = process.argv.slice(2);

const lookup = `
{$lookup: {
    'as': '${args[0]}', 
    'from': '${args[1]}',
    'localField': '${args[2]}',
    'foreignField': '${args[3]}',
}}
`;

console.log(lookup);
