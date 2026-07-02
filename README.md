# StayNest — Property Rental Platform

A full-stack property rental platform with separate customer-facing and admin portals, backed by a Spring Boot REST API. The project follows a monorepo structure and provides role-based access for Guests, Hosts, and Administrators.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend (Customer) | React 19, Vite, Tailwind CSS, TanStack Router, TanStack Query |
| Frontend (Admin) | React 19, Vite, Tailwind CSS, TanStack Router, TanStack Query |
| Backend | Spring Boot, Spring Security, Spring Data JPA |
| Authentication | JWT (JSON Web Tokens), Role-Based Authorization |
| Database | MySQL 8.x |
| Migrations | Liquibase |
| API Documentation | SpringDoc OpenAPI, Swagger UI |
| Build Tool | Maven (Wrapper Included) |

---

## Architecture Overview

The application follows a three-tier architecture with a clean separation between presentation, business logic, and data persistence. Both the Customer and Admin React frontends communicate with the Spring Boot backend exclusively through REST APIs secured with JWT. The backend talks to MySQL for persistence, with schema versioning handled entirely by Liquibase.
### Layered Backend Structure

| Layer | Responsibility | Example Classes |
|---|---|---|
| Controller | Expose REST endpoints, validate HTTP requests | `AuthController`, `PropertyController`, `BookingController`, `AdminController` |
| Service | Business logic, orchestration | `AuthService`, `PropertyService`, `BookingService`, `AdminService` |
| Repository | Database access via Spring Data JPA | `UserRepository`, `PropertyRepository`, `BookingRepository` |
| Entity | JPA-mapped database tables | `User`, `Property`, `Booking`, `Review`, `Message` |
| Security | JWT generation, validation, filter chain | `JwtTokenProvider`, `JwtAuthenticationFilter`, `SecurityConfig` |
| DTO | Request/response shaping | `AuthRequest`, `AuthResponse`, `PropertyRequest`, `BookingRequest` |
| Exception | Centralized error handling | `GlobalExceptionHandler`, `ResourceNotFoundException` |

---

## Monorepo Structure
> Note: The nested `apps/apps/` directory structure is intentional and is part of the project organization.

---

## Features

**Customer Portal**
- User Registration & Login
- Search Properties
- Property Details
- Booking Management
- Reviews & Ratings
- Messaging

**Admin Portal**
- Dashboard
- User Management
- Property Approval
- Booking Monitoring
- Analytics
- Property Status Management

**Backend**
- REST APIs
- JWT Authentication
- Role-Based Authorization
- Swagger API Documentation
- Liquibase Database Migration
- Spring Security
- MySQL Database

---

## Setup Instructions (Local Development)

### Prerequisites
- Java 21
- Maven (Wrapper Included)
- Node.js 20.x or later
- npm 10.x or later
- MySQL 8.x
- Git

### Backend Setup
```bash
cd services/RentalBackend
```

Create the database:
```sql
CREATE DATABASE staynest_db;
```
The schema is managed automatically using Liquibase - no manual SQL scripts are required after creating the database.

Configure environment variables before starting the backend:

| Variable | Description | Example |
|---|---|---|
| `DB_URL` | Database Connection URL | `jdbc:mysql://localhost:3306/staynest_db` |
| `DB_USERNAME` | Database Username | `root` |
| `DB_PASSWORD` | Database Password | `your_db_password` |
| `JWT_SECRET` | JWT Secret Key | `your-secret-key` |
| `JWT_EXPIRATION_MS` | JWT Token Expiration | `3600000` |
| `CORS_ALLOWED_ORIGINS` | Allowed Origins | `http://localhost:5173,http://localhost:5174` |
| `SERVER_PORT` | Backend Port | `8080` |

> For production deployments, store sensitive values in environment variables or a secure secrets manager rather than hardcoding them.

Run the app:
```bash
mvnw.cmd spring-boot:run
```
Backend runs on `http://localhost:8080/api/v1`.

### Customer Portal Setup
```bash
cd apps/apps/customers
npm install --legacy-peer-deps
```

Create a `.env` file:
Run the dev server:
```bash
npm run dev
```
Runs on `http://localhost:5173`.

### Admin Portal Setup
```bash
cd apps/apps/admin
npm install --legacy-peer-deps
```

Create a `.env` file:Run the dev server:
```bash
npm run dev
```
Runs on `http://localhost:5174`.

---

## API Documentation

Swagger UI is integrated using SpringDoc OpenAPI. After starting the backend, open:Run the dev server:
```bash
npm run dev
```
Runs on `http://localhost:5174`.

---

## API Documentation

Swagger UI is integrated using SpringDoc OpenAPI. After starting the backend, open:Swagger provides:
- Interactive API Documentation
- Request & Response Models
- JWT Authentication Support
- Try-It-Out Feature
- Response Codes
- Example Requests

---

## Database Migration

Liquibase is used for database version control. Changelog files are located at:Files included:
- `db.changelog-master.xml`
- `db.changelog-1.0-create-users-roles.xml`
- `db.changelog-1.1-create-properties.xml`
- `db.changelog-1.2-create-bookings-reviews-messages.xml`
- `db.changelog-1.3-create-booking-dates.xml`
- `db.changelog-1.4-add-missing-fks.xml`

---

## Security

The application uses:
- Spring Security
- JWT Authentication
- Role-Based Authorization
- Password Encryption
- CORS Configuration

**Available Roles:** Guest - Host - Admin

---

## Project Modules

| Module | Capabilities |
|---|---|
| Authentication | Login, Register, JWT Token Generation |
| Property | Create, Update, Delete, View Property |
| Search | Search Listings, Filter Listings |
| Booking | Create Booking, Cancel Booking, Booking History |
| Reviews | Add Review, View Reviews |
| Messaging | Send Message, View Conversation |
| Admin | Dashboard, User Management, Property Approval, Analytics |

---

## Verification Steps

1. Start MySQL.
2. Create the database.
3. Start the backend.
4. Open Swagger UI.
5. Start the Customer Portal.
6. Start the Admin Portal.
7. Register/Login.
8. Verify booking, property management, messaging, reviews, and admin operations.

---

## Repository

| Component | Path |
|---|---|
| Frontend (Customer) | `apps/apps/customers` |
| Frontend (Admin) | `apps/apps/admin` |
| Backend | `services/RentalBackend` |

---

## Contributors
StayNest Development Team

## Author
- **Chintha Jyoshna**
- MCA Graduate (2025)
- Java Full Stack Developer
- GitHub: [Josuchintha63](https://github.com/Josuchintha63)

## License
This project is developed for educational and project submission purposes.
