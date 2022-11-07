const Engineer = require('../lib/engineer');
const engineer = new Engineer('Arinze', '1234567', 'metoama@gmail.com', 'metoama');

test('test contrsuctor values for engineer', () => {
    expect(engineer.name).toBe('Arinze');
    expect(engineer.id).toBe('1234567');
    expect(engineer.email).toBe("metoama@gmail.com");
    expect(engineer.github).toBe("metoama");
});

test('should return name from getName() method', () => {
    expect(engineer.getName()).toBe('Arinze');
});

test('should return id from getId() method',  () => {
    expect(engineer.getId()).toBe('1234567');
});

test('should return email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('metoama@gmail.com');
});

test('should return git hub username from getGitHub()', () => {
    expect(engineer.getGitHub()).toBe("metoama")
})
  
test('test if getRole method will return role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});