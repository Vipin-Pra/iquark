# Makefile for Library Management System

CC = gcc
CFLAGS = -Wall -Wextra -std=c99
TARGET = library_management
SRC = library_management.c

all: $(TARGET)

$(TARGET): $(SRC)
	$(CC) $(CFLAGS) $(SRC) -o $(TARGET)

clean:
	rm -f $(TARGET)

run: $(TARGET)
	./$(TARGET)

.PHONY: all clean run
