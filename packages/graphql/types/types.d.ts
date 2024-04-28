export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

/** A response type for authentication mutations */
export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type AuthResult = AuthPayload | ValidationError;

/** Input type for creating a user */
export type CreateUserInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

/** A generic error type with a message field */
export type Error = {
  __typename?: 'Error';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Authenticate a user with email and password */
  login?: Maybe<AuthResult>;
  /** Register a new user with the provided input */
  register?: Maybe<AuthResult>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  /** A simple query to say hello */
  sayHello: SayHelloResponse;
};

/** A generic response type with a message field */
export type ResponseMessage = {
  message: Scalars['String']['output'];
};

/** A response type for the sayHello query */
export type SayHelloResponse = ResponseMessage & {
  __typename?: 'SayHelloResponse';
  message: Scalars['String']['output'];
};

/** Input type for updating a user */
export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** A type representing a user */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

/** A type for validation errors */
export type ValidationError = {
  __typename?: 'ValidationError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};
