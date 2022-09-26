// type Developer = {
//   name: string;
// } & Record<string, any>;
type Developer = {
  name: string;
  [key: string]: string | number | boolean;
};
const evondev: Developer = {
  name: "Tran Anh Tuan",
  age: 29,
  gender: "male",
  school: "Cao Thang",
  isGood: true,
};
// evondev['name'] = 'Tran Anh Tuan'
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// Type ['darkMode','newUserProfile']
// Property: darkMode: boolean, newUserProfile: boolean
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// Mapping Modifiers
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
// evondev['name'] = 'Tran Anh Tuan'

type LockedAccount = {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly isGood: boolean;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<T> = {
  [P in keyof T]-?: T[P];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
// Key Remapping via `as`
// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties];
// };
// Template literal `abc ${variable}`
type Getters<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    value: Type[Property]
  ) => Type[Property];
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Focus`]?: (
    value: Type[Property]
  ) => Type[Property];
};
interface Person {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<Person>;
// onNameChange: (value: string) => void
// onAgeChange: (value: number) => void
// onLocationChange: (value: string) => void
// onNameFocus: (value: string) => void
// onAgeFocus: (value: number) => void
// onLocationFocus: (value: string) => void

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
