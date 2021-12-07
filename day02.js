let snow = {
      key: 'value',
      color: 'white',
      wet: true,
      inches: 4,
      accidents: ['100', '694', '23', '35', 'crosstown']
};

let stringText = `Today is has already snowed ${snow.inches} inches`;

console.log(stringText);

snow.iscold = true;

console.log(`snow is`, snow);
console.log(`snow is ${snow}`);

let buildings = [
      {
            color: `brown`,
            isTall: true
      },
      {
            color: `gray`,
            isTall: true
      },
      {
            color: `blue`,
            isTall: false
      }
]
console.log(`look at all the buildings:`);
console.log(buildings);

const penguins = [
      {
            name: `Emperor`,
            isCute: true
      },
      {
            name: `Little`,
            isCute: true
      },
      {
            name: `Sea Gull`,
            isCute: false
      }
]

function checkPenguinsFor(penguinsArray) {
      let cutePenguins = [];
      for (let i = 0; i < penguinsArray.length; i++) {
            if (penguinsArray[i].isCute) {
                  cutePenguins.push(penguinsArray[i].name)
            }
      }
      return cutePenguins
}
function checkPenguinsForOf(penguinsArray) {
      let cutePenguins = [];
      for (let penguin of penguinsArray) {
            if (penguin.isCute) {
                  cutePenguins.push(penguin.name);
            }
      }
      return cutePenguins
}

console.log(`all the cute penguins are:`, checkPenguinsFor(penguins));

console.log(`all the cute penguins are:`, checkPenguinsForOf(penguins));

//this means that for and for..of can do the same thing

function Hat(type, color, size) {
      this.type = type,
            this.color = color,
            this.size = size
};

const averageTopHat = new Hat(`Top`, `Black`, 14);
const fedora = new Hat(`Fedora`, `Tiger stripes`, 10);
const funnyHat = new Hat(`Funny`, `Rainbow`, 18);

console.log(`Our fedora is size ${fedora.size}`);
function printHat(hatInput) {
      console.log(`Hat type is`, hatInput.type);
      console.log(`Hat color is`, hatInput.color);
}

printHat(fedora);
printHat({ type: `Baseball`, color: `yellow`, size: 12 });

