import Validator from '../validator';

test('validator', () => {
  const result = new Validator();
  expect(result.validateUsername('mehanick')).toBe(true);
});
