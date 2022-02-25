---
Author: Sila Rim
Generate: "This file was generated to edit in src/docs/xxx.md then run
  command yarn gen:docs"
License: MIT
---

# NextJs Next Boilerplate

This is a really simple project that shows the usage of Next.js with
TypeScript.

## Preview Demo

Preview the demo live on
[nextjs-next-boilerplate.netlify.app](https://nextjs-next-boilerplate.netlify.app/)

## Online development or testing [Gitpod](https://black-vulture-4nc7wcyb.ws-us18.gitpod.io/)

# GraphQl

## Step 1: Generate graph QL from xx.gql file

-   create .gql file with graph ql schema

    create file xxName.gql in page/template or some where inside src for
    individual if want to global share should be create in
    `graphQl/gql/xxxName.gql`

ex: crate graphQl/gql/sample.gql

``` tsx
query post($id: ID!) {
  post(id: $id) {
    id
    title
    body
  }
}
```

### Run command to generate there are method

-   `Method1:` generate without watch file so we need to generate every
    create new file or update xxxName.gql

``` bash
yarn codegen
```

-   `Method2:` generate with watch file so it will generate every create
    new file or change xxxName.gql it's good for pc or computer has big
    RAM.

``` bash
yarn codegen:watch
```

### Generate output

you will get 3 file there are

-   `hooks.tsx` it will generate apollo hook to this file.
-   `operations.tsx` this file will generate as type base on operation
    of schema in xxName.gql.
-   `schemas.tsx` this file will generate as the whole type from graph
    ql api.

### Usage in Apollo Client in component

-   The real sample code of using it in store/useDemoStore.ts

-   before using it don't forget to wrap withApollo for every page or
    global in page/app.tsx for this boilerplate already set up as global
    now it ready to use.

``` tsx
/**
 * with GraphQl useQuery
 */
export const HomePage = () => {
  const {
    data: postData,
    loading: loadingPostData,
    refetch: refetchPostData,
  } = usePostQuery({
    variables: {id: 1 }
  });

  return <h1>{postData.title}<h1/>
};
```

# Locale

### Usage of locales or i18n with i18nNext

### Step 1: add locale key to language file

-   `Add locale key` to all language file inside
    `src/locales/resources/xx.json`

-   Translate for english

``` json
// resources/en.json
{
  "welcome": "Welcome to Nextjs Next Boilerplate",
  "settings": {
    "currentLanguage": "Current Language : {{locale}}"
  }
}
```

-   Translate for khmer

``` json
// resources/km.json

{
  "welcome": "សូមស្វាគមន៍មកកាន់ Nextjs Next Boilerplate",
  "settings": {
    "currentLanguage": "ភាសាបច្ចុប្បន្ន : {{locale}}"
  }
}
```

### Step 2: Get Typescript update

-   For current issue with typescript not update new key that we have
    added so we need to reload IDE to get new typescript update.

-   For VS-CODE IDE

    -   Mac User

``` bash
command key + p then input > then input reload then click Reload Window
```

### Step 3: Usage

``` tsx
export const HomePage = () => {
// get t func from store if those page already call seSettingsStore
const { t } = useSettingsStore();

//if not yet call seSettingsStore we also can call useTranslation from i18n it self
const { t } = useTranslation();

  return <>
// with dynamic text translate
   <h1> {t('settings.currentLanguage', { locale: 'khmer' })} <h1/>

// with normal translate
   <h1> {t('welcome')} <h1/>
  </>;
};
```

``` tsx
import { createStore, useGlobalStore } from '@/hooks';

/**
 * this is sample of usage hookstate with persist plugin
 * @link https://hookstate.js.org/docs/global-state
 */

/**
 * init interface
 */
type IInitStore = {
  colorScheme: 'dark' | 'light';
};

//init store value with interface it will use own value as interface
const initWithOwnType = {
  counter: 0,
};

// init store value with interface it will use IInitStore for typing
const initWithType: IInitStore = {
  colorScheme: 'light',
};

// combine init type & own type together
const initStore = {
  ...initWithOwnType,
  ...initWithType,
};

// get combine type for store interface
type IStore = IInitStore & typeof initStore;

// get combine store key interface for whitelist typing
type IStoreKey = keyof IStore;

// create hook store
const store = createStore(initStore);

/**
 *  this one is normal custom hook we can return other state too
 *  but make sure following the rule of custom hook
 */
export default function useSampleStore() {
  /**
   * useGlobalStore is a custom hook base on hookstate
   * provide persistence with whitelist or blacklist
   */
  const { state } = useGlobalStore<IStoreKey, IStore>({
    key: 'useSampleStore',
    store,
    whitelist: ['counter'],
  });

  // usage of update state with arg
  const setCounterDecBy = (by = 1) => {
    state.counter.set((p) => p - by);
  };

  return {
    /**
     * usage of get state it will render only state.counter change due to it use proxy base
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
     */
    get counter() {
      return state.counter.get();
    },
    //return func as normal custom hook
    setCounterDecBy,
  } as const;
}

export type ISettingStore = Partial<ReturnType<typeof useSampleStore>>;
```

# Typescript tutorial Common use in ReactJS By Sila

``` tsx
/**
 * interface: defined interface
 */
export interface IUser {
  name: string;
  id: number;
  gender: 'MALE' | 'FEMALE';
}

/**
 * type is like is new shorthand syntax for interface and it only a bit feature different
 */
type UserType = {
  name: string;
  id?: number;
  gender: 'MALE' | 'FEMALE';
};

type AdditionalUserType = {
  school: string;
  grade: string;
};

// usage:
export const userInfo: IUser = {
  gender: 'FEMALE',
  id: 1,
  name: 'Sila',
};

const getUserInfoFunc = () => userInfo;

/**
 * Access to object property type
 *
 * -Ex: if we want to create UserName type we don't need to write type name:string again
 * just access to use existing property in base type
 */
export type UserName = IUser['name'];

/**
 * extends: inherits the properties for other type
 * - using & sign to extends type like UserType extends AdditionalUserType...
 */
export type FullUserType = UserType &
  AdditionalUserType & {
    schoolId: string;
  };

/**
 * Partial: convert all type to optional
 */

// ex: type will not required name and id
export const partialUser: Partial<UserType> = {
  gender: 'FEMALE',
};

/**
 * Required: convert all type to required
 * -Ex: all type will be required event will put optional in our base type like id in UserType
 */

export const requiredUser: Required<UserType> = {
  id: 1,
  name: 'sila',
  gender: 'MALE',
};

/**
 * Omit: remove property in type
 * - Ex: name is remove from UserType
 */
export const omitUserType: Omit<UserType, 'name'> = {
  gender: 'MALE',
  id: 1,
};

/**
 * Pick: select property in type
 * - Ex: name is remove from UserType
 */
export const pickUserType: Omit<UserType, 'name'> = {
  gender: 'MALE',
  id: 1,
};

/**
 * Exclude: remove property in type
 * - Ex: banana is remove from FruitType
 */
type FruitType = 'coffee' | 'banana';
// excludeFruit can't equal to 'banana'
export const excludeFruit: Exclude<FruitType, 'banana'> = 'coffee';

/**
 * ReturnType get inherited type from func
 *
 * -Ex: returnTypeFunc func bellow will return UserInfoType
 */
export const returnTypeFunc = (fruit: ReturnType<typeof getUserInfoFunc>) => {
  return fruit;
};

/**
 * Generic: can be pass new type to type
 */

// U if optional because already assign sting
type dynamicTypeArg<T, U = string> = {
  name: U;
  otherInfo: Partial<T>;
};

export const dynamicData: dynamicTypeArg<UserType> = {
  name: 'Sila',
  otherInfo: {
    gender: 'FEMALE',
  },
};

// usage in normal func
export const genericArr = <T extends unknown = string>(arg1?: T) => {
  return arg1;
};
// usage in arrow func
export function genericFunc<T>(arg: T) {
  return arg;
}

// conditional generic

export type GenConditionalType<T = boolean> = T extends boolean ? boolean : string;

export const renderCondition = <T extends unknown>(v: T) => v;

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const userName = getProperty({ name: 'sila' });
// log(userName.name) ==> "sila"
```

[Back Contents](#Contents)
