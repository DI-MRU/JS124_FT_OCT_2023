-- Creation of the table CUSTOMER
-- CREATE TABLE
--     IF NOT EXISTS CUSTOMER (
--         id SERIAL PRIMARY KEY,
--         first_name VARCHAR(50) NOT NULL,
--         last_name VARCHAR(50) NOT NULL
--     );
-- Creation of the customer_profile table
-- CREATE TABLE
--     IF NOT EXISTS customer_profile (
--         id SERIAL PRIMARY KEY,
--         IsloggedIn BOOLEAN NOT NULL DEFAULT FALSE,
--         customer_id INT REFERENCES customer (id)
--     );
-- Inserting values in customer table
-- INSERT INTO
--     CUSTOMER (first_name, last_name)
-- VALUES
--     ('John', 'Doe'),
--     ('Jerome', 'Lalu'),
--     ('Lea', 'Rive');
-- Inserting values in customer_profile table
-- INSERT INTO
--     customer_profile (IsloggedIn, customer_id)
-- VALUES
--     (
--         TRUE,
--         (
--             SELECT
--                 id
--             FROM
--                 customer
--             WHERE
--                 first_name = 'John'
--                 AND last_name = 'Doe'
--         )
--     ),
--     (
--         FALSE,
--         (
--             SELECT
--                 id
--             FROM
--                 customer
--             WHERE
--                 first_name = 'Jerome'
--                 AND last_name = 'Lalu'
--         )
--     );
-- SELECT first_name FROM customer that are logged in
SELECT
    first_name
FROM
    customer
    LEFT JOIN customer_profile ON customer_id = customer.id
WHERE
    IsloggedIn = TRUE;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT
    first_name,
    IsloggedIn
FROM
    customer
    LEFT JOIN customer_profile ON customer_id = customer.id;

-- The number of customers that are not LoggedIn
SELECT
    COUNT(*)
FROM
    customer
    LEFT JOIN customer_profile ON customer_id = customer.id
WHERE
    IsloggedIn = FALSE
    OR isloggedin IS NULL;