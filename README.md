# Web Book App

A simple web application to manage a list of books, including viewing book details, adding, editing, and deleting books, and managing favorite books. The app uses React.js with TypeScript and SCSS.

## Features

- **View Books**: Display a paginated list of books fetched from a mock API.
- **Book Details**: View detailed information about each book.
- **Add/Edit/Delete Books**: Manage books locally with the ability to add, edit, and delete.
- **Favorite Books**: Add or remove books from favorites, with persistence across sessions.
- **Toasts**: Display notifications for book additions and removals.

## Technologies Used

- **React.js**: Frontend library for building the user interface.
- **TypeScript**: For type safety and better development experience.
- **SCSS**: For styling the application with modular CSS.
- **React Hook Form**: For managing form state and validation.
- **React Router**: For routing and navigation.
- **Local Storage**: To persist favorite books and locally stored books.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/web-book-app.git
   cd web-book-app

2. Install Dependencies

    npm install (I used this)
    # or
    yarn install

3. Start the Development Server

    npm run dev
    # or
    yarn run dev

  This will start the application on http://localhost:3000.

Usage

View Book List: Navigate to the home page to see the list of books.
Book Details: Click on a book to view its details.
Add Book: Go to the Add Book page to add a new book.
Edit Book: Click on a book and use the edit feature to modify book details.
Delete Book: Use the delete button to remove a book from the list.
Manage Favorites: Click the heart icon to add or remove books from your favorites.

API Endpoints

List Books
GET https://my-json-server.typicode.com/cutamar/mock/books

Book Details
GET https://my-json-server.typicode.com/cutamar/mock/books/{id}

Folder Structure

src/
components/: Reusable UI components.
hooks/: Custom hooks for application logic.
pages/: Page components for routing.
types/: TypeScript types and interfaces.
App.tsx: Main application component with routing.
index.tsx: Entry point of the React application.
styles/: SCSS files for styling.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Inspired by Upler-Brains are Live

Author(Developer): Jyoti Maurya