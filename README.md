### FIREBASE-HELPERS

A Tiny Helper utility to use Firebase.

## Installation

  `npm install @emjimadhu/firebase-helpers`

## Usuage

```javascript
  import Firebase from '@emjimadhu/firebase-helpers'

  // Intialize Firebase by passing Firebase Config Object
  Firebase.init(options)

  // Staet Using it
  const dataArr = Firebase.read('some-awesome-collection')
```

## Table of Contents (APIs)

-   [Firebase][1]
    -   [init][2]
        -   [Parameters][3]
    -   [read][4]
        -   [Parameters][5]
    -   [add][6]
        -   [Parameters][7]
    -   [login][8]
        -   [Parameters][9]
    -   [register][10]
        -   [Parameters][11]
    -   [logout][12]
    -   [socialLogin][13]
        -   [Parameters][14]
    -   [currentUser][15]
    -   [sendEmailVerification][16]
    -   [resetpassword][17]
        -   [Parameters][18]

## Firebase

Class Firebase Object.

### init

initializes Firebase Instance.

#### Parameters

-   `options` **[object][19]** Firebase Config Options.

Returns **void** No Return.

### read

Read Collect Datas

#### Parameters

-   `collectionName` **[string][20]** Name of the Firestore Collection to read

Returns **[array][21]** Array of Datas.

### add

Add Data to Firestore Collection

#### Parameters

-   `collectionName` **[string][20]** Name of the Firestore Collection.
-   `data` **[object][19]** Data to stored.

Returns **[object][19]** Returns data reference

### login

Login using Email And Password to Firebase

#### Parameters

-   `options` **[object][19]** Object contiaining Email And Password Keys.
    -   `options.email`  
    -   `options.password`  

Returns **[object][19]** Returns User Object

### register

Register using Email And Password to Firebase

#### Parameters

-   `options` **[object][19]** Object contiaining Email And Password Keys.
    -   `options.email`  
    -   `options.password`  

Returns **[object][19]** Returns User Object

### logout

Logsout from Firebase.

Returns **void** Returns undefined

### socialLogin

Firebase Social Authentications

#### Parameters

-   `socialName` **[string][20]** Name of the Social Authtication to Connect (ex: google, facebook, twitter and github)

Returns **[object][19]** Returns User Object

### currentUser

Get Currently Logged In User.

Returns **[object][19]** Returns User Object

### sendEmailVerification

Send Email Verification

Returns **[object][19]** Returns Status Information

### resetpassword

Reset Password

#### Parameters

-   `email` **[string][20]** An Email address to send Reset password link

Returns **[object][19]** Returns status

[1]: #firebase

[2]: #init

[3]: #parameters

[4]: #read

[5]: #parameters-1

[6]: #add

[7]: #parameters-2

[8]: #login

[9]: #parameters-3

[10]: #register

[11]: #parameters-4

[12]: #logout

[13]: #sociallogin

[14]: #parameters-5

[15]: #currentuser

[16]: #sendemailverification

[17]: #resetpassword

[18]: #parameters-6

[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
