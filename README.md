# Shehryar Suleman Fall 2021 - Shopify Developer Intern Challenge 

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
| POST | Add image  | /api/v1/images |
| GET  | Get all images | api/v1/images |
| GET  | Get image by id | api/v1/images/{id} |
| PUT  | Edit image by id | api/v1/images/{id} |
| DELETE  | Delete image by id | api/v1/images/{id} |
| GET  | Gets a presigned url to upload image to s3 from the frontend | /s3_presigned_url |

After starting the server, you can use Postman or curl to send these request. For this demo, I will show screenshots sample request and response in Postman.

### Demo

I have also exported a postman collection of all the APIs which is located at the root of the branch (Shopify Challenge API's.postman_collection)

## Signing Up (creating a new user)

![Alt text](/screenshots/signupsuccesful.png?raw=true "Signing Up")

If the password is too small or they don't match then the user would not be able to sign up

![Alt text](/screenshots/signupfailed.png?raw=true "Signing Up")

## Login

Now once a user is signed up, he has to login

![Alt text](/screenshots/loginsuccessful.png?raw=true )

If user provides wrong credentials, they cannot login

![Alt text](/screenshots/loginfailed.png?raw=true )

Now once hes logged in, he can get and post images

### Get Image

Getting all images:

![Alt text](/screenshots/getallimages.png?raw=true )

Get image by id

![Alt text](/screenshots/getimagebyid.png?raw=true )

If id is not valid or found, user would get the following

![Alt text](/screenshots/errgetimagebyid.png?raw=true )

## Post Image (create a new image)

Post image:

![Alt text](/screenshots/postimage.png?raw=true )

## Update image

![Alt text](/screenshots/putimagebyid.png?raw=true )

again, if id is not found or not valid, an error message is shown same as getimagebyid

## Delete image

![Alt text](/screenshots/deleteimagebyid.png?raw=true)


### Getting Presigned URL from the backend so that image can be uploaded directly to s3 from the client side

![Alt text](/screenshots/s3presignedurl.png?raw=true )

Thank you. I hope you enjoyed the demo!!!!

