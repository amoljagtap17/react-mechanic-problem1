/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./../src/app/graphql/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CapacityInputType: { // input type
    buildingId: string; // String!
    capacity: number; // Int!
    divisionId: string; // String!
    floorId: string; // String!
    wingId: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Building: { // root type
    buildingName: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
  }
  Capacity: { // root type
    buildingId: string; // String!
    capacity: number; // Int!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    divisionId: string; // String!
    floorId: string; // String!
    id: string; // String!
    wingId: string; // String!
  }
  Department: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    departmentName: string; // String!
    id: string; // String!
  }
  Division: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    divisionName: string; // String!
    id: string; // String!
  }
  Floor: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    floorNo: number; // Int!
    id: string; // String!
  }
  Mutation: {};
  Query: {};
  Seat: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    seatNumber: string; // String!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    id: string; // String!
    image?: string | null; // String
    name?: string | null; // String
    role: string; // String!
  }
  Wing: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    wingName: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Building: { // field return type
    buildingName: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    floors: NexusGenRootTypes['Floor'][]; // [Floor!]!
    id: string; // String!
  }
  Capacity: { // field return type
    assignedCapacity: number | null; // Int
    building: NexusGenRootTypes['Building'] | null; // Building
    buildingId: string; // String!
    capacity: number; // Int!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    division: NexusGenRootTypes['Division'] | null; // Division
    divisionId: string; // String!
    floor: NexusGenRootTypes['Floor'] | null; // Floor
    floorId: string; // String!
    id: string; // String!
    wing: NexusGenRootTypes['Wing'] | null; // Wing
    wingId: string; // String!
  }
  Department: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    departmentName: string; // String!
    division: NexusGenRootTypes['Division'] | null; // Division
    id: string; // String!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Division: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    departments: NexusGenRootTypes['Department'][]; // [Department!]!
    divisionName: string; // String!
    id: string; // String!
  }
  Floor: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    floorNo: number; // Int!
    id: string; // String!
    wings: NexusGenRootTypes['Wing'][]; // [Wing!]!
  }
  Mutation: { // field return type
    createCapacity: NexusGenRootTypes['Capacity']; // Capacity!
  }
  Query: { // field return type
    buildings: NexusGenRootTypes['Building'][]; // [Building!]!
    capacity: NexusGenRootTypes['Capacity'][]; // [Capacity!]!
    departments: NexusGenRootTypes['Department'][]; // [Department!]!
    departmentsForCurrentUser: NexusGenRootTypes['Department'][]; // [Department!]!
    divisions: NexusGenRootTypes['Division'][]; // [Division!]!
    floors: NexusGenRootTypes['Floor'][]; // [Floor!]!
    seatCount: number; // Int!
    seats: NexusGenRootTypes['Seat'][]; // [Seat!]!
    super_users: NexusGenRootTypes['User'][]; // [User!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
    wings: NexusGenRootTypes['Wing'][]; // [Wing!]!
  }
  Seat: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    seatNumber: string; // String!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    department: NexusGenRootTypes['Department'] | null; // Department
    email: string | null; // String
    emailVerified: NexusGenScalars['DateTime'] | null; // DateTime
    id: string; // String!
    image: string | null; // String
    name: string | null; // String
    role: string; // String!
  }
  Wing: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    seats: NexusGenRootTypes['Seat'][]; // [Seat!]!
    wingName: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Building: { // field return type name
    buildingName: 'String'
    createdAt: 'DateTime'
    floors: 'Floor'
    id: 'String'
  }
  Capacity: { // field return type name
    assignedCapacity: 'Int'
    building: 'Building'
    buildingId: 'String'
    capacity: 'Int'
    createdAt: 'DateTime'
    division: 'Division'
    divisionId: 'String'
    floor: 'Floor'
    floorId: 'String'
    id: 'String'
    wing: 'Wing'
    wingId: 'String'
  }
  Department: { // field return type name
    createdAt: 'DateTime'
    departmentName: 'String'
    division: 'Division'
    id: 'String'
    users: 'User'
  }
  Division: { // field return type name
    createdAt: 'DateTime'
    departments: 'Department'
    divisionName: 'String'
    id: 'String'
  }
  Floor: { // field return type name
    createdAt: 'DateTime'
    floorNo: 'Int'
    id: 'String'
    wings: 'Wing'
  }
  Mutation: { // field return type name
    createCapacity: 'Capacity'
  }
  Query: { // field return type name
    buildings: 'Building'
    capacity: 'Capacity'
    departments: 'Department'
    departmentsForCurrentUser: 'Department'
    divisions: 'Division'
    floors: 'Floor'
    seatCount: 'Int'
    seats: 'Seat'
    super_users: 'User'
    users: 'User'
    wings: 'Wing'
  }
  Seat: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    seatNumber: 'String'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    department: 'Department'
    email: 'String'
    emailVerified: 'DateTime'
    id: 'String'
    image: 'String'
    name: 'String'
    role: 'String'
  }
  Wing: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    seats: 'Seat'
    wingName: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCapacity: { // args
      data: NexusGenInputs['CapacityInputType']; // CapacityInputType!
    }
  }
  Query: {
    departmentsForCurrentUser: { // args
      departmentName: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}