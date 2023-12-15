```bash
# SQL
SELECT * FROM students;

# KNEX
knex.select('*').from('students');
```

Find all students where student fName starts with 'a' and lName ends with 'e'.

```bash
# SQL
SELECT * FROM students
WHERE
    fName ILIKE 'a%'
    AND lName ILIKE '%e';

# KNEX
knex
.select('*').from('students')
.whereILike('fName', 'a%')
.andWhereILike('lName', '%e')


knex('students')
.whereILike('fName', 'a%')
.andWhereILike('lName', '%e')
```

Update all students with sex 'M' to sex 'F'

```bash
# SQL
UPDATE students
SET sex = 'F'
WHERE sex = 'M';

# KNEX
knex('students')
.where('sex', 'M')
.update({
    sex: 'F'
})
```
