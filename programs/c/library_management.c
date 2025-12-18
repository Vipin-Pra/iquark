#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_BOOKS 100
#define MAX_TITLE_LENGTH 50

// Structure to represent a book
typedef struct {
    int id;
    char title[MAX_TITLE_LENGTH + 1];
    int isActive; // 1 if book exists, 0 if deleted
} Book;

// Global array to store books
Book library[MAX_BOOKS];
int bookCount = 0;

// Function prototypes
void displayMenu();
void addBook();
void searchBookById();
void deleteBookById();
void displayAllBooks();
int isValidId(int id);
int isUniqueId(int id);
int findBookIndexById(int id);

int main() {
    int choice;
    
    // Initialize library
    for (int i = 0; i < MAX_BOOKS; i++) {
        library[i].isActive = 0;
    }
    
    while (1) {
        displayMenu();
        printf("Choose an option: ");
        
        if (scanf("%d", &choice) != 1) {
            // Clear input buffer on invalid input
            while (getchar() != '\n');
            printf("Invalid input. Please enter a number.\n\n");
            continue;
        }
        
        // Clear the newline character from buffer
        while (getchar() != '\n');
        
        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                searchBookById();
                break;
            case 3:
                deleteBookById();
                break;
            case 4:
                displayAllBooks();
                break;
            case 5:
                printf("Exiting the program...\n");
                return 0;
            default:
                printf("Invalid option. Please choose a valid option (1-5).\n\n");
        }
    }
    
    return 0;
}

void displayMenu() {
    printf("1. Add a book\n");
    printf("2. Search for a book by ID\n");
    printf("3. Delete a book by ID\n");
    printf("4. Display all books\n");
    printf("5. Exit\n");
}

void addBook() {
    int id;
    char title[MAX_TITLE_LENGTH + 1];
    
    // Check if library is full
    if (bookCount >= MAX_BOOKS) {
        printf("Library is full. Cannot add more books.\n\n");
        return;
    }
    
    // Get book ID
    printf("Enter Book ID: ");
    if (scanf("%d", &id) != 1) {
        while (getchar() != '\n');
        printf("Invalid input. Book ID must be a number.\n\n");
        return;
    }
    while (getchar() != '\n');
    
    // Validate ID
    if (!isValidId(id)) {
        printf("Invalid Book ID. Book ID must be a positive integer.\n\n");
        return;
    }
    
    // Check if ID is unique
    if (!isUniqueId(id)) {
        printf("Book ID already exists. Please use a unique ID.\n\n");
        return;
    }
    
    // Get book title
    printf("Enter Book Title: ");
    if (fgets(title, sizeof(title), stdin) == NULL) {
        printf("Error reading title.\n\n");
        return;
    }
    
    // Remove trailing newline if present
    size_t len = strlen(title);
    if (len > 0 && title[len - 1] == '\n') {
        title[len - 1] = '\0';
    }
    
    // Remove quotes if present
    if (title[0] == '"' && title[strlen(title) - 1] == '"') {
        title[strlen(title) - 1] = '\0';
        memmove(title, title + 1, strlen(title));
    }
    
    // Validate title length
    if (strlen(title) == 0) {
        printf("Title cannot be empty.\n\n");
        return;
    }
    
    if (strlen(title) > MAX_TITLE_LENGTH) {
        printf("Title is too long. Maximum length is %d characters.\n\n", MAX_TITLE_LENGTH);
        return;
    }
    
    // Find first available slot
    for (int i = 0; i < MAX_BOOKS; i++) {
        if (!library[i].isActive) {
            library[i].id = id;
            strncpy(library[i].title, title, MAX_TITLE_LENGTH);
            library[i].title[MAX_TITLE_LENGTH] = '\0';
            library[i].isActive = 1;
            bookCount++;
            printf("Book added successfully.\n\n");
            return;
        }
    }
}

void searchBookById() {
    int id;
    
    printf("Enter Book ID: ");
    if (scanf("%d", &id) != 1) {
        while (getchar() != '\n');
        printf("Invalid input. Book ID must be a number.\n\n");
        return;
    }
    while (getchar() != '\n');
    
    int index = findBookIndexById(id);
    if (index != -1) {
        printf("Book found: ID=%d, Title=\"%s\"\n\n", library[index].id, library[index].title);
    } else {
        printf("Book not found.\n\n");
    }
}

void deleteBookById() {
    int id;
    
    printf("Enter Book ID: ");
    if (scanf("%d", &id) != 1) {
        while (getchar() != '\n');
        printf("Invalid input. Book ID must be a number.\n\n");
        return;
    }
    while (getchar() != '\n');
    
    int index = findBookIndexById(id);
    if (index != -1) {
        library[index].isActive = 0;
        bookCount--;
        printf("Book deleted successfully.\n\n");
    } else {
        printf("Book not found.\n\n");
    }
}

void displayAllBooks() {
    if (bookCount == 0) {
        printf("No books in the library.\n\n");
        return;
    }
    
    for (int i = 0; i < MAX_BOOKS; i++) {
        if (library[i].isActive) {
            printf("Book ID=%d, Title=\"%s\"\n", library[i].id, library[i].title);
        }
    }
    printf("\n");
}

int isValidId(int id) {
    return id > 0;
}

int isUniqueId(int id) {
    for (int i = 0; i < MAX_BOOKS; i++) {
        if (library[i].isActive && library[i].id == id) {
            return 0;
        }
    }
    return 1;
}

int findBookIndexById(int id) {
    for (int i = 0; i < MAX_BOOKS; i++) {
        if (library[i].isActive && library[i].id == id) {
            return i;
        }
    }
    return -1;
}
