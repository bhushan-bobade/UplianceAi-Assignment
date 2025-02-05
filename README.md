# My React Application

This is a React application with routing and protected routes using `react-router-dom`. It includes several pages such as a Counter, Editor, User Data, and an Authentication page.




## Usage

This application has the following routes:

- `/login`: The Authentication page.
- `/`: The Counter page, which is protected by `CounterProtectedRoute`.
- `/UserData`: The User Data page.
- `/Editors`: The Editor page.

## Components

### Header

The `Header` component is included on all pages and provides navigation.

### Counter

The `Counter` component is displayed on the root path (`/`). It is wrapped in a protected route.

### Editor

The `Editor` component is available at `/Editors`.

### UserData

The `UserData` component is available at `/UserData`.

### Authentication

The `Authentication` component is available at `/login`.

## Protected Routes

The `Counter` component is wrapped in a `CounterProtectedRoute`, ensuring that only authenticated users can access it.

### CounterProtectedRoute

## Installation

To install the dependencies and start the application, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/shubhampawar05/UplianceProject.git
    ```

2. Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the application:
    ```sh
    npm start
    ```

The application will start on `http://localhost:3000`.
