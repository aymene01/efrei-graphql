/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: {
    'AuthPayload': { kind: 'OBJECT'; name: 'AuthPayload'; fields: { 'token': { name: 'token'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'user': { name: 'user'; type: { kind: 'OBJECT'; name: 'User'; ofType: null; } }; }; };
    'AuthResult': { kind: 'UNION'; name: 'AuthResult'; fields: {}; possibleTypes: 'AuthPayload' | 'ValidationError'; };
    'Boolean': unknown;
    'CreateUserInput': { kind: 'INPUT_OBJECT'; name: 'CreateUserInput'; inputFields: [{ name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'password'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'passwordConfirmation'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'Date': unknown;
    'Error': { kind: 'OBJECT'; name: 'Error'; fields: { 'message': { name: 'message'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'ID': unknown;
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'login': { name: 'login'; type: { kind: 'UNION'; name: 'AuthResult'; ofType: null; } }; 'register': { name: 'register'; type: { kind: 'UNION'; name: 'AuthResult'; ofType: null; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'sayHello': { name: 'sayHello'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'SayHelloResponse'; ofType: null; }; } }; }; };
    'ResponseMessage': { kind: 'INTERFACE'; name: 'ResponseMessage'; fields: { 'message': { name: 'message'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; possibleTypes: 'SayHelloResponse'; };
    'SayHelloResponse': { kind: 'OBJECT'; name: 'SayHelloResponse'; fields: { 'message': { name: 'message'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'String': unknown;
    'UpdateUserInput': { kind: 'INPUT_OBJECT'; name: 'UpdateUserInput'; inputFields: [{ name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'email'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'password'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'User': { kind: 'OBJECT'; name: 'User'; fields: { 'createdAt': { name: 'createdAt'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null; }; } }; 'email': { name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'password': { name: 'password'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'updatedAt': { name: 'updatedAt'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null; }; } }; }; };
    'ValidationError': { kind: 'OBJECT'; name: 'ValidationError'; fields: { 'field': { name: 'field'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'message': { name: 'message'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
  };
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}