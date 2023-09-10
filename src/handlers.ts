import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";
import { v4 } from "uuid";

const dbClient = new AWS.DynamoDB.DocumentClient();

export const helloWorld = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Welcome to aws serverless api project!",
      },
      null,
      2,
    ),
  };
};

export const createUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const requestBody = JSON.parse(event.body as string);
  const newUser = {
    ...requestBody,
    userId: v4(),
  };
  await dbClient
    .put({
      TableName: "UserTable",
      Item: newUser,
    })
    .promise();
  return {
    statusCode: 201,
    body: JSON.stringify(newUser),
  };
};

export const getUserById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id: string | undefined = event.pathParameters?.id;
  const userFound = await dbClient
    .get({
      TableName: "UserTable",
      Key: {
        userId: id,
      },
    })
    .promise();
  if (!userFound.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "User not found" }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(userFound.Item),
  };
};
