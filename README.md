# Aws Serverless Nodejs API

This is a POC project in order to grow with AWS Serverless applications, DynamoDB, and Rest APIs in lambda functions form.

The project has been deployed on aws, and aws secrets were been configured in my local pc, creating a new account via IAM.

If you want to contribute adding new lambdas or to improve the current solution, i can give you the right access.

## Setup project locally

First thing first, set your AWS secret keys with this command:

```command
serverless config credentials --provider aws --key "your access key" --secret "your secret key"
```

and then, depending on which package manager you use, type:

```command
npm install
```

or:

```command
yarn install
```

## Deployment

After saved your modifies in the project, type this command to deploy your solution:

```command
serverless deploy
```

## API Reference

#### Hello world

```http
  GET /hello
```

| Parameter | Description                          |
| :-------- | :----------------------------------- |
| `none`    | Is just a simple **hello world api** |

#### Create User

```http
  POST /createUser
```

| Body                                                     | Type        | Description                                 |
| :------------------------------------------------------- | :---------- | :------------------------------------------ |
| `{name: "string", "surname": string, "email": "string"}` | `JSON Body` | **Required**. JSON Body request user object |
