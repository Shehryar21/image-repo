# Shehryar Suleman Summer 2021 - Shopify Developer Intern Challenge 

The following is what the application is capable of doing:
1. Add one or bulk images
2. Delete one or bulk images
3. User permissions
4. Login existing user
5. Register new user
6. Secure uploading of image using the s3 bucket

The application only has the backend setup for now since the challenge did not require a frontend component, but a barebones react Frontend is there and could be easily changed. I would have created a fancy frontend, but talking to Shopify representatives, a Frontend component for a the backend challenge was not needed, so I just focused on the backend.

Since Shopify uses Ruby on Rails quite alot, I decided to make my project using Ruby on Rails as well. This was my first time using Ruby and I had a great time learning and building out the project.


### Technologies Used
1. Ruby on Rails
2. PostgreSQL
3. S3 Bucket
4. React

### Prerequisites
* Ruby 2.7.1
* Rails 6.0.3
* [yarn](https://classic.yarnpkg.com/en/docs/install/)
* [PostgreSQL](https://www.postgresql.org/download/)

The following steps assume that all dependencies are present.

- Install packages

```bash
bundle install && yarn install
```

- Update `config/application.yml` with AWS credentials 
- Update `config/database.yml` with Postgres credentials

- Create and setup the database

```bash
rake db:create
rake db:migrate
```

- Start the Rails server

```bash
rails s
```


### Backend API's

| Type | Purpose | Endpoint
| ------------- | ------------- | ------------ |
| POST | Registers New User  | /users |
| POST  | Login to the session | /login |
| GET | Logout from the session | /logout |
| POST | Add image  | /api/v1/images.json |
| GET  | Get all images | api/v1/images.json |
| GET  | Gets a presigned url to upload image to s3 from the frontend | /s3/direct_post |
| GET  | Get image by id | api/v1/images.json/{id} |
| DELETE  | Delete image by id | api/v1/images.json |

After starting the server, you can use Postman or curl to send these request. For this demo, I will show screenshots sample request and response in Postman.

### Demo

![Alt text](/screenshots/signupsuccessful.png?raw=true "Signing Up")

If the password is too small or they don't match then the user would not be able to sign up

![Alt text](/screenshots/signupfailed.png?raw=true "Signing Up")

Now once a user is signed up, he has to login

![Alt text](/screenshots/loginsuccessful.png?raw=true "Signing Up")

If user provides wrong credentials, they cannot login

![Alt text](/screenshots/loginfailed.png?raw=true "Signing Up")

Now once hes logged in, he can get and post images

Getting all images:

![Alt text](/screenshots/gatallimages.png?raw=true "Signing Up")

Post image:

![Alt text](/screenshots/postimage.png?raw=true "Signing Up")


