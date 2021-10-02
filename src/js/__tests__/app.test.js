import { Bowman } from '../Characters';

test('Bowman', () => {
  expect(new Bowman('Alex', 'Bowman')).toEqual({
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
