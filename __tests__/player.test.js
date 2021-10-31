const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

console.log(new Potion());

expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
  