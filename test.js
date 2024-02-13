// Test array value check
const names = ['jahangir', 'alam', 'jakariya', 'nur', 'mehedi', 'yeasin', 'hamid', 'mamun'];
const i = 0;
const nameLength = names.length;

while (i < nameLength) {
    console.log(names[i]);

    if (names[i] == 'yeasin') {
        i++;
        continue;
    }

    console.log('Yeasin is very bad boy');
    i++;
}