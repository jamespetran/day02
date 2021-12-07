let snow ={
      key: 'value',
      color: 'white',
      wet: true,
      inches: 4,
      accidents: ['100','694','23','35','crosstown']
};

let stringText = `Today is has already snowed ${snow.inches} inches`;

console.log(stringText);

snow.iscold = true;

console.log(`snow is`, snow);
console.log(`snow is ${snow}`);