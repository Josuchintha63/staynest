StayNest

A full-stack property rental platform with separate customer-facing and admin portals, backed by a

Spring Boot REST API. The project follows a monorepo structure and provides role-based access for

Guests, Hosts, and Administrators.

Monorepo Structure

staynest/

├── apps/

│   └── apps/

│       

├── customers/          

│       

└── admin/              

├── services/

│   └── RentalBackend/          

├── .gitignore

└── README.md

Note: The nested 

\# Customer Portal (React + Vite)

\# Admin Portal (React + Vite)

\# Spring Boot REST API

apps/apps/ directory structure is intentional and is part of the

project organization.

Features

Customer Portal

• 

• 

• 

• 

• 

• 

User Registration \& Login

Search Properties

Property Details

Booking Management

Reviews \& Ratings

Messaging

Admin Portal

• 

• 

• 

• 

• 

• 

Dashboard

User Management

Property Approval

Booking Monitoring

Analytics

Property Status Management

Backend

• 

REST APIs

1

• 

• 

• 

• 

• 

• 

JWT Authentication

Role-Based Authorization

Swagger API Documentation

Liquibase Database Migration

Spring Security

MySQL Database

Technology Stack

Frontend

• 

• 

• 

• 

• 

React 19

Vite

Tailwind CSS

TanStack Router

TanStack Query

Backend

• 

• 

• 

• 

• 

• 

Spring Boot

Spring Security

Spring Data JPA

JWT Authentication

Liquibase

Maven

Database

• 

MySQL 8.x

API Documentation

• 

• 

SpringDoc OpenAPI

Swagger UI

Prerequisites

Before running the project, ensure the following software is installed:

• 

• 

• 

• 

• 

• 

Java 21

Maven (Wrapper Included)

Node.js 20.x or later

npm 10.x or later

MySQL 8.x

Git

2

Environment Variables

Backend (

services/RentalBackend )

Configure the following variables before starting the backend.

Variable

DB\_URL

Description

Database Connection

URL

Example

jdbc:mysql://localhost:3306/

staynest\_db

DB\_USERNAME

Database Username

root

DB\_PASSWORD

Database Password

your\_db\_password

JWT\_SECRET

JWT Secret Key

your-secret-key

JWT\_EXPIRATION\_MS

JWT Token Expiration

3600000

CORS\_ALLOWED\_ORIGINS Allowed Origins

http://localhost:5173,http://

localhost:5174

SERVER\_PORT

Backend Port

8080

Note: For production deployments, store sensitive values in environment variables or a

secure secrets manager rather than hardcoding them.

Frontend (

apps/apps/customers \& 

Create a 

.env file.

Variable

Description

apps/apps/admin )

Example

VITE\_API\_BASE\_URL

Backend API URL

http://localhost:8080/api/v1

Database Setup

Start MySQL.

Create the database:

CREATE DATABASE staynest\_db;

The database schema is managed automatically using Liquibase. No manual SQL scripts are required

after creating the database.

3

Running the Backend

cd services/RentalBackend

mvnw.cmd spring-boot:run

Backend URL

http://localhost:8080/api/v1

Swagger Documentation

http://localhost:8080/api/v1/docs

Running the Customer Portal

cd apps/apps/customers

npm install --legacy-peer-deps

npm run dev

Application URL

http://localhost:5173

Running the Admin Portal

cd apps/apps/admin

npm install --legacy-peer-deps

npm run dev

Application URL

http://localhost:5174

4

API Documentation

Swagger UI is integrated using SpringDoc OpenAPI.

After starting the backend, open:

http://localhost:8080/api/v1/docs

Swagger provides:

• 

• 

• 

• 

• 

• 

Interactive API Documentation

Request \& Response Models

JWT Authentication Support

Try-It-Out Feature

Response Codes

Example Requests

Database Migration

Liquibase is used for database version control.

Database changelog files are located at:

services/

└── RentalBackend/

└── src/

└── main/

└── resources/

└── db/

└── changelog/

Files included:

• 

• 

• 

• 

• 

• 

db.changelog-master.xml

db.changelog-1.0-create-users-roles.xml

db.changelog-1.1-create-properties.xml

db.changelog-1.2-create-bookings-reviews-messages.xml

db.changelog-1.3-create-booking-dates.xml

db.changelog-1.4-add-missing-fks.xml

5

Security

The application uses:

• 

• 

• 

• 

• 

Spring Security

JWT Authentication

Role-Based Authorization

Password Encryption

CORS Configuration

Available Roles:

• 

• 

• 

Guest

Host

Admin

Project Modules

Authentication

• 

• 

• 

Login

Register

JWT Token Generation

Property

• 

• 

• 

• 

Create Property

Update Property

Delete Property

View Property

Search

• 

• 

Search Listings

Filter Listings

Booking

• 

• 

• 

Create Booking

Cancel Booking

Booking History

Reviews

• 

• 

Add Review

View Reviews

Messaging

Send Message

6

• 

View Conversation

• 

Admin

• 

• 

• 

• 

Dashboard

User Management

Property Approval

Analytics

Verification Steps

1\. 

2\. 

3\. 

4\. 

5\. 

6\. 

7\. 

8\. 

Start MySQL.

Create the database.

Start the backend.

Open Swagger UI.

Start the Customer Portal.

Start the Admin Portal.

Register/Login.

Verify booking, property management, messaging, reviews, and admin operations.

Repository

Frontend(Customer)

apps/apps/customers

Frontend(Admin)

apps/apps/admin

Backend

services/RentalBackend

Contributors

StayNest Development Team

License

This project is developed for educational and project submission purposes.

7

