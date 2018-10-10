import firebase from 'firebase/app'
import 'firebase/firestore'

/** Class Firebase Object. */
export default class Firebase {
  /**
   * initializes Firebase Instance.
   * @param {object} options - Firebase Config Options.
   * @return {void} No Return.
   */
  static init (options) {
    firebase.initializeApp(options)
  }
  /**
   * Firestore Database Instance
   * @return {object} Returns db instance
   * @private.
   */
  static db () {
    let db = firebase.firestore()

    db.settings({
      timestampsInSnapshots: true
    })

    return db
  }
  /**
   * Read Collect Datas
   * @param {string} collectionName - Name of the Firestore Collection to read
   * @return {array} Array of Datas.
   */
  static async read (collectionName) {
    try {
      const snapshot = await this.db().collection(collectionName).get()
      if (snapshot) {
        let arr = []
        snapshot.forEach((doc) => {
          arr.push(doc.data())
        })
        return arr
      }
    } catch (e) {
      return e
    }
  }
  /**
   * Add Data to Firestore Collection
   * @param {string} collectionName - Name of the Firestore Collection.
   * @param {object} data - Data to stored.
   * @return {object} Returns data reference
   */
  static async add (collectionName, data) {
    try {
      return await this.db().collection(collectionName).add(data)
    } catch (e) {
      return e
    }
  }
  /**
   * Login using Email And Password to Firebase
   * @param {object} options - Object contiaining Email And Password Keys.
   * @return {object} Returns User Object
   */
  static async login ({ email, password }) {
    try {
      return await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      return e
    }
  }
  /**
   * Register using Email And Password to Firebase
   * @param {object} options - Object contiaining Email And Password Keys.
   * @return {object} Returns User Object
   */
  static async register ({ email, password }) {
    try {
      return await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (e) {
      return e
    }
  }
  /**
   * Logsout from Firebase.
   * @return {void} Returns undefined
   */
  static async logout () {
    try {
      return await firebase.auth().signOut()
    } catch (e) {
      return e
    }
  }
  /**
   * Firebase Social Authentications
   * @param {string} socialName - Name of the Social Authtication to Connect (ex: google, facebook, twitter and github)
   * @return {object} Returns User Object
   */
  static async socialLogin (socialName) {
    try {
      let provider = null
      switch (socialName.toLowerCase()) {
        case 'google':
          provider = new firebase.auth.GoogleAuthProvider()
          break
        case 'twitter':
          provider = new firebase.auth.TwitterAuthProvider()
          break
        case 'github':
          provider = new firebase.auth.GithubAuthProvider()
          break
        case 'facebook':
          provider = new firebase.auth.FacebookAuthProvider()
          break
        default:
          return {
            status: 400,
            message: 'No Provider Specified',
            stack: {}
          }
      }

      return await firebase.auth().signInWithPopup(provider)
    } catch (e) {
      return e
    }
  }
  /**
   * Get Currently Logged In User.
   * @return {object} Returns User Object
   */
  static currentUser () {
    return firebase.auth().currentUser
  }
  /**
   * Send Email Verification
   * @return {object} Returns Status Information
   */
  static async sendEmailVerification () {
    try {
      await this.currentUser().sendEmailVerification()
      return {
        code: 200,
        message: 'Email Verification Sent',
        stack: {}
      }
    } catch (e) {
      return {
        code: 400,
        message: 'Error when sending Email Verification',
        stack: e
      }
    }
  }
  /**
   * Reset Password
   * @param {string} email - An Email address to send Reset password link
   * @return {object} Returns status
   */
  static async resetpassword (email) {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      return {
        code: 200,
        message: 'Reset Email Sent.',
        stack: {}
      }
    } catch (e) {
      return {
        code: 400,
        message: 'Error when sending Reset Email.',
        stack: e
      }
    }
  }
}
