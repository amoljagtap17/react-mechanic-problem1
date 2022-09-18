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
  Floor: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    floorNo: number; // Int!
    id: string; // String!
  }
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
    id: string; // String!
  }
  Floor: { // field return type
    building: NexusGenRootTypes['Building'] | null; // Building
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    floorNo: number; // Int!
    id: string; // String!
  }
  Query: { // field return type
    buildings: NexusGenRootTypes['Building'][]; // [Building!]!
    floors: NexusGenRootTypes['Floor'][]; // [Floor!]!
    seats: NexusGenRootTypes['Seat'][]; // [Seat!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
    wings: NexusGenRootTypes['Wing'][]; // [Wing!]!
  }
  Seat: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    seatNumber: string; // String!
    wing: NexusGenRootTypes['Wing'] | null; // Wing
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string | null; // String
    emailVerified: NexusGenScalars['DateTime'] | null; // DateTime
    id: string; // String!
    image: string | null; // String
    name: string | null; // String
  }
  Wing: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    floor: NexusGenRootTypes['Floor'] | null; // Floor
    id: string; // String!
    wingName: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Building: { // field return type name
    buildingName: 'String'
    createdAt: 'DateTime'
    id: 'String'
  }
  Floor: { // field return type name
    building: 'Building'
    createdAt: 'DateTime'
    floorNo: 'Int'
    id: 'String'
  }
  Query: { // field return type name
    buildings: 'Building'
    floors: 'Floor'
    seats: 'Seat'
    users: 'User'
    wings: 'Wing'
  }
  Seat: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    seatNumber: 'String'
    wing: 'Wing'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    emailVerified: 'DateTime'
    id: 'String'
    image: 'String'
    name: 'String'
  }
  Wing: { // field return type name
    createdAt: 'DateTime'
    floor: 'Floor'
    id: 'String'
    wingName: 'String'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

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