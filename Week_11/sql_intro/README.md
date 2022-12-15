# Lighthouse Labs | Intro to SQL

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-intro-to-sql/tree/2022.11.29-web-flex-day-19sept2022) | [Vimeo Video Recording](https://vimeo.com/776341428/41d143f1c4)

* [X] Databases
* [X] PostgreSQL
* [X] Basic SQL Queries

## Existing Approaches to Database...

* Local variables (object / array)
* Saving to files

`const myDatabase = {...};`

`fs` --> More persistant! But still too slow...

### Pros

* Don't have to learn more than JS; just works!
* No 3rd-party structure or headache
* Lots of freedom
* Potentially a lot less code!
* Files are a persistant storage solution
* Great for quick and "dirty" tests

### Cons

* Space might be a concern depending on amount of data
* Structure requires a lot of thought / effort
* An outside language might have been nice to ensure separation of concerns (avoid collision)
* Might be less re-usable / shareable?
* JavaScript is not specialized in data storage...
    * Loss of efficiency; JS will struggle with organizing massive data
* Adds a lot of file / code bloat...
    * A lot more work keeping things organized, unwieldy.
* Read / write time for files will also be less efficient than a database system
* No central way to access the data
* Async could be a concern???

## Why switch to a DBMS (Database Management System?)

* Higher performance...
* DBMSs are specialized software for efficient, consistent, and structured data handling/manipulation...

## RDBMS (Relational Database Management System)

A DBMS that follow the relational model.

* PostgreSQL
* Microsoft SQL Server (MSSQL)
* MariaDB
* MySQL
* Oracle

## Putting one more Piece in the Web Development Puzzle

![Full Stack Puzzle Diagram](https://github.com/WarrenUhrich/lighthouse-labs-intro-to-sql/blob/2022.07.26-web-flex-16may2022/full_stack_puzzle.png?raw=true)

We've had the opportunity, at this point, to explore a variety of technologies on the web! The full-stack is often described as being composed of the [front-end](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer) ([HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)) and the [back-end (server-side application / scripts](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction), a database.) Just about every one of these pieces has been touched on now, except for... the [database](https://developer.mozilla.org/en-US/docs/Glossary/Database)! So that's what we're going to begin exploring today.

![Mozilla's Web Application Breakdown Diagram](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction/web_application_with_html_and_steps.png)

*Image courtesy of the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction).*

## Databases

While building applications in previous assignments and practice, there were a number of times that we found it difficult to properly store information in a consistent and persistant way... this is because we were usually lacking a formal database. This is the problem we try to solve!

Typically databases are an effective way to reliably store information that represent real-world entities. This is most often accomplished by dedicated software that specializes in data storage and organization.

There are a variety of popular and powerful [database management systems (DBMS)](https://en.wikipedia.org/wiki/Database#Database_management_system) available, you may have already heard of some:

* [PostgreSQL](https://www.postgresql.org/)
* [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2019)
* [MariaDB](https://mariadb.org/)
* [MySQL](https://www.mysql.com/)

The above are just the tip of the database management system iceberg, so you'll likely hear about more as you continue your software development journey! As we can't afford to cover them all within the scope of a bootcamp, we'll be spending some time with one in particular: [PostgreSQL](https://www.postgresqltutorial.com/).

Think back to node.js / Express... we were only able to ask for HTML responses with our web browser if the script / server was actually running. We'll see the same when using our database software—if the service is not running properly and in a way accessible to apps, then it won't be of much use.

## The Relational Model

PostgreSQL, and many other popular database management systems, choose to follow a [relational model](https://en.wikipedia.org/wiki/Relational_model) for data storage. This usually means data is stored and interacted with as tuples within relations... basically, lists of information kept in related storage containers. We'll explore better language for this in just a moment!

Most RDBMSs (relational database management systems) have incorporated [SQL (structured query language)](https://en.wikipedia.org/wiki/SQL) to more easily and consistently set-up, query from, add to, and otherwise manipulate their database contents. It is our goal today to get familiar both with the idea of the relational database, and start interacting with it via this common language.

## Important Terms

### Database: Collection of related tables.

Databases(, collections,) are composed of one or more tables. They most often feature a descriptive name, and should only contain tables that are relevant to one another for use in a particular project.

### Table: Collection of related records.

Tables(, relations,) directly represent a series of stored entities. Tables feature fields / columns, which define what information can be stored in each row, and what format(s) this data should follow.

We define these fields(, attributes, properties, or columns,) that will be consistent among all entries in this table.

### Record: Collection of related fields.

An individual record(, row, or entity) inside of a table is composed of the actual information (values) for that specific entry in the table.

## Visualizing this Concept

Here is a sample table, titled "Programming Languages":

### programming_languages

| **id**    | **name**    | **year** | **description**
|-----------|-------------|----------|----------------
| 1         | HTML        | 1993     | Markup language for website content.
| 2         | CSS         | 1996     | Stylesheet language for visual aspect of web page content.
| 3         | JavaScript  | 1995     | Web page scripting language.
| 4         | Ruby        | 1995     | General purpose and programmer-friendly scripting language.
| 5         | SQL         | 1974     | Language for interacting with database systems.

### Breaking Down its Pieces

This exposes the terms and what it is that makes up a table. Note that we are representing a specific entity and reflecting that in the name of the table: `programming_languages`

If we're careful with naming, this helps us as developers make it immediately clear what it is that is stored inside. Consider the following database with two tables inside:

```
my_db
├table_a
└table_b
```

Can you easily guess what sort of information will be contained in this database or its tables? Probably not... now, what if you saw another named like so:

```
programmer_site_db
├users
└programming_languages
```

Naming can make a big difference, especially in a team environment. It will save you a lot of explaining and lead to a far more intuitive experience.

Okay, so, back to the `programming_languages` table. We know that we want to store some sort of data surrounding programming, but we'll want to be clear about what data is expected on a per-programming-language-basis. This is where **fields** come in.

Our fields, or columns, restrict and explain each piece of info every programming language in this table should have. In this case, something like:

```
programming_languages fields:
  INTEGER | id
  STRING  | name
  INTEGER | year
  STRING  | description
```

Every programming language in our table should have an `id`, `name`, `year`, and `description`. Now that we have a named table, and have defined what it is that should be stored inside it, we need to talk records, or, rows.

If we'd like to add a new **record** to the table, we have to make sure it follows our previous rules. Let's say we want to add some basic details about the [Julia](https://julialang.org/) programming language. Following our field expectations, we'd format the info something like:

| **id**    | **name**    | **year** | **description**
|-----------|-------------|----------|----------------
| 6         | Julia       | 2012     | General purpose and high-performance scripting language.

This would be a representation of a single record, or row, in the `programming_languages` table. 

Let's see what it looks like along with the other records:

### programming_languages

| **id**    | **name**    | **year** | **description**
|-----------|-------------|----------|----------------
| 1         | HTML        | 1993     | Markup language for website content.
| 2         | CSS         | 1996     | Stylesheet language for visual aspect of web page content.
| 3         | JavaScript  | 1995     | Web page scripting language.
| 4         | Ruby        | 1995     | General purpose and programmer-friendly scripting language.
| 5         | SQL         | 1974     | Language for interacting with database systems.
| 6         | Julia       | 2012     | General purpose and high-performance scripting language.

### Database Example

![Database Example Image](https://github.com/WarrenUhrich/lighthouse-labs-intro-to-sql/blob/2022.07.26-web-flex-16may2022/database_example.png?raw=true)

## SQL Syntax

Let's break down some basics in SQL's syntax. For example, consider the following `SELECT` statement:

```SQL
-- A basic SQL query:
SELECT * FROM users;
```

The `--` indicates an SQL comment. Comments in SQL are single-lined, and are simply preceded by these two characters.

One might assume that `SELECT` and `FROM`, being keywords, are required to be all-capitalized. This is, however, not the case! Keywords in SQL are generally not capital-sensitive. This means we could type in `sElEcT`, `select`, `SELect`, `selECT`, `SELECT`, etc. and each would be considered valid. Why bother thinking about capitalization, then, and why do so many examples feature keywords in all-capital letters!?

This brings us into one of the strengths of SQL: it is intended to be human readable. Even reading our simple sample statement: `SELECT * FROM users;` you may be able to guess what it is that this line is meant to accomplish. To clarify, that line tells the database to read to us all (`*`) values stored in the `users` table. Most SQL is meant to read similar to English, and behave intuitively based on how you write instructions.

To follow suit in this human-readable fashion, we aim to ensure it is clear to other developers what is a construct of the SQL language, and what is related to our own database tables and fields. To help make this distinction, most use all-capital letters for SQL keywords. Because it is a common convention for our own table and field names to be `snake_case`, it makes both cases (SQL keywords and our own names) stand out and very clearly even at a glance.

Note as well that each full SQL statement ends in a semi-colon. This is important to remember, as many requests will result in an error (or await more instructions) without this inclusion!

## Pagination Example

![What is Pagination?](https://github.com/WarrenUhrich/lighthouse-labs-intro-to-sql/blob/2022.07.26-web-flex-16may2022/pagination_diagram.png?raw=true)

## Resources

* [Official PostgreSQL Website](https://www.postgresql.org/)
    * [Documentation](https://www.postgresql.org/docs/)

* [SQLBolt: Introduction to SQL](https://sqlbolt.com/)
    * [`SELECT`](https://sqlbolt.com/lesson/select_queries_review)
    * [`JOIN`s](https://sqlbolt.com/lesson/select_queries_with_joins)
    * [Order of execution of a Query](https://sqlbolt.com/lesson/select_queries_order_of_execution)
    * [`CREATE TABLE`](https://sqlbolt.com/lesson/creating_tables)
    * [`INSERT`](https://sqlbolt.com/lesson/inserting_rows)
    * [`UPDATE`](https://sqlbolt.com/lesson/updating_rows)
    * [`DELETE`](https://sqlbolt.com/lesson/deleting_rows)

* [PostgreSQL Tutorial](https://www.postgresqltutorial.com/postgresql-tutorial/)
    * [`SELECT`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/) and [Aliases](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-column-alias/)
    * [`ORDER BY`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-order-by/)
    * [`DISTINCT`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select-distinct/)
    * [`WHERE`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/)
    * [`LIMIT`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-limit/)
    * [`INNER JOIN`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-inner-join/)
    * [`LEFT JOIN`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-left-join/)
    * [`RIGHT JOIN`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-right-join/)
    * [`INSERT`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert/) and [Inserting Multiple Rows](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert-multiple-rows/)
    * [`UPDATE`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update/)
    * [`DELETE`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete/)
    * [`PRIMARY KEY`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-primary-key/)
    * [`FOREIGN KEY`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-foreign-key/)
    * [`GROUP BY`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-group-by/)
    * [`HAVING`](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-having/)

* [W3Schools: SQL](https://www.w3schools.com/sql/default.asp)
    * [Comments](https://www.w3schools.com/sql/sql_comments.asp)
    * [`SELECT`](https://www.w3schools.com/sql/sql_select.asp)
    * [`DISTINCT`](https://www.w3schools.com/sql/sql_distinct.asp)
    * [`WHERE`](https://www.w3schools.com/sql/sql_where.asp)
    * [`AND`, `OR`, `NOT`](https://www.w3schools.com/sql/sql_and_or.asp)
    * [`ORDER BY`](https://www.w3schools.com/sql/sql_orderby.asp)
    * [`INSERT INTO`](https://www.w3schools.com/sql/sql_insert.asp)
    * [`UPDATE`](https://www.w3schools.com/sql/sql_update.asp)
    * [`DELETE`](https://www.w3schools.com/sql/sql_delete.asp)
    * [`COUNT()`, `AVG()`, `SUM()`](https://www.w3schools.com/sql/sql_count_avg_sum.asp)
    * [`INNER JOIN`](https://www.w3schools.com/sql/sql_join_inner.asp)
    * [`LEFT JOIN`](https://www.w3schools.com/sql/sql_join_left.asp)
    * [`RIGHT JOIN`](https://www.w3schools.com/sql/sql_join_right.asp)
    * [`FULL OUTER JOIN`](https://www.w3schools.com/sql/sql_join_full.asp)
    * [`GROUP BY`](https://www.w3schools.com/sql/sql_groupby.asp)
    * [`HAVING`](https://www.w3schools.com/sql/sql_having.asp)
