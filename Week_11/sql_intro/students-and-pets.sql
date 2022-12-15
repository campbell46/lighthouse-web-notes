CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    type TEXT,
    colour TEXT,
    name TEXT,
    cuteness INTEGER,
    student_id INTEGER
);

-- student #1
INSERT INTO students(name)
VALUES('Paige Nelmes');

INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES('Cat', 'Grey', 'Mai', 10, 1);

-- student #2
INSERT INTO students(name)
VALUES('Ngozi Nwabiani');

INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES('none', 'void', 'levi', 0, 2);

-- student #3
INSERT INTO students(name)
VALUES('Shafaq Saud');
INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES('cat', 'white', 'kookoosan', 10, 3);

-- student #4
INSERT INTO students(name)
VALUES('Anders Flotten');
INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES('Dog', 'black', 'bruce', 10, 4);

-- student #5
INSERT INTO students(name)
VALUES('Gaurav Mahant');
INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES('Dog', 'black', 'Bruno', 10, 5);

-- student #6
INSERT INTO students(name)
VALUES('Alric Fernandes');
INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES
('cat', 'white', 'ragdoll', 10, 6),
('cat', 'white', 'ace', 10, 6);

-- student #7
INSERT INTO students(name)
VALUES('Arnold Mesa');
INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES('Cat', 'Black', 'Wednesday', 10, 7);

-- student #8
INSERT INTO students(name)
VALUES('John Ross');
INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES('Cat', 'Black', 'Peach', 10, 8);

-- student #9
INSERT INTO students(name)
VALUES('Ehsan Elgendi');
INSERT INTO pets(type, colour, name, cuteness, student_id)
VALUES
('Parakeet', 'yellow & blue', 'Mango &  Blue velvet', 10, 9),
('Parakeet', 'yellow', 'Mango', 10, 9),
('Parakeet', 'Blue', 'Blue Velvet', 10, 9);

-- student #10
INSERT INTO students(name)
VALUES('Chelsea Dwarika');

-- student #11
INSERT INTO students(name)
VALUES('Sarah Campbell');

-- student #12
INSERT INTO students(name)
VALUES('William Li');

-- Retreive all students...
SELECT * FROM students;

-- Retrieve all pets...
SELECT * FROM pets;
SELECT name, type, cuteness FROM pets;

-- Grab pet with ID #3
SELECT name, type
FROM pets
WHERE id = 3;

-- Pagination

-- (Page 1)
SELECT id, name
FROM pets
OFFSET 0
LIMIT 3;

-- (Page 3)
SELECT id, name
FROM pets
OFFSET 6
LIMIT 3;

-- Order
SELECT id, name
FROM pets
ORDER BY name ASC;

-- INNER JOIN example
SELECT
    students.name AS student_name,
    pets.name AS pet_name,
    type
FROM students -- LEFT table
JOIN pets -- RIGHT table
ON students.id = pets.student_id; -- This defines our MATCH!!!

-- LEFT JOIN example
SELECT
    students.name AS student_name,
    pets.name AS pet_name,
    type
FROM students -- LEFT table
LEFT JOIN pets -- RIGHT table
ON students.id = pets.student_id; -- This defines our MATCH!!!

-- NULL CHECK example
SELECT
    students.name AS student_name,
    pets.name AS pet_name,
    type
FROM students -- LEFT table
LEFT JOIN pets -- RIGHT table
ON students.id = pets.student_id
WHERE pets.student_id IS NULL; -- Only students returned with NULL pet
