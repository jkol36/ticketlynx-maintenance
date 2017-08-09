import { onSaleRef, userRef } from './config'
import moment from 'moment'
import firebaseAdmin from 'firebase-admin'


const removeOnSaleRef = () => {
  return onSaleRef
  .remove()
  .then(() => console.log('done'))
}

const listenForUserDeleted = () => {
  userRef.on('child_removed', s => {
    console.log('user deleted', s.val())
    let {uid} = s.val()
    return firebaseAdmin.auth().deleteUser(uid)
  })
}

setInterval(() => removeOnSaleRef(), 86100000)
listenForUserDeleted()