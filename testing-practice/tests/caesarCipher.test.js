const caesarCipher = require('../functions/caesarCipher');

describe('caesarCipher', () => {
	test('Encrypt string using a positive key', () => {
		expect(caesarCipher(3,'Hello World!')).toBe('Khoor Zruog!');
	});
});
