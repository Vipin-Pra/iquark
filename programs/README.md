# Programming Exercises

This directory contains programming exercises and practice problems for students at iQuark Coaching Institute.

## Directory Structure

- `c/` - C programming exercises

## C Programming Exercises

### Library Management System

**File:** `c/library_management.c`

A menu-driven program for managing a small library system with the following features:

1. **Add a book** - Add a new book with ID and title
2. **Search for a book by ID** - Find a book using its ID
3. **Delete a book by ID** - Remove a book from the library
4. **Display all books** - Show all books in the system
5. **Exit** - Terminate the program

#### Constraints
- Maximum 100 books
- Book IDs must be unique positive integers
- Book titles cannot exceed 50 characters

#### How to Compile and Run

```bash
# Navigate to the c directory
cd programs/c

# Compile the program
gcc library_management.c -o library_management

# Run the program
./library_management
```

#### Example Usage

```
1. Add a book
2. Search for a book by ID
3. Delete a book by ID
4. Display all books
5. Exit
Choose an option: 1
Enter Book ID: 101
Enter Book Title: C Programming Language
Book added successfully.

Choose an option: 2
Enter Book ID: 101
Book found: ID=101, Title="C Programming Language"

Choose an option: 4
Book ID=101, Title="C Programming Language"

Choose an option: 5
Exiting the program...
```

#### Features Implemented
- Input validation for book IDs (must be positive integers)
- Unique book ID enforcement
- Title length validation (max 50 characters)
- Dynamic memory management for up to 100 books
- User-friendly menu interface
- Error handling for invalid inputs
