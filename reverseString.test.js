const reverseString = require('./reverseString')

test('Reverse Hello to olleh', () => {
	expect(reverseString('hello')).toBe('olleh')
	expect(reverseString('go home')).toBe('emoh og')
  })