import {initializeApp} from 'firebase/app'


const firebaseApp=initializeApp({

  apiKey: "AIzaSyAgsV4fRpCTCsnzST3jAIJ-Ypg0TH_WOfA",
  authDomain: "accountdetails-51c16.firebaseapp.com",
  projectId: "accountdetails-51c16",
  storageBucket: "accountdetails-51c16.firebasestorage.app",
  messagingSenderId: "822120055780",
  appId: "1:822120055780:web:e8df41e608d4163e4efdf1",
  measurementId: "G-SFX1FF5HGN"
});
//iniyialize firebase
firebase.initializeApp(firebaseCofig)
//refrence your database
var accountdetailsDB=firebase.database().ref("accountdetails")

document.getElementById('accountdetails').addEventListener('submit',submitForm)
function submitForm(e){
  e.preventDefault();
  var firstname=getElementValue('firstname');
  var lastname=getElementValue('lastname');
  var email=getElementValue('email')
  var password=getElementValue('password')
  var confirmPassword=getElementValue('confirmPassword')
  var gender=getElementValue('male')
  var gender=getElementValue('female')
  var hobbies=getElementValue('music')
  var hobbies=getElementValue('sports')
  var hobbies=getElementValue('travel')
  var hobbies=getElementValue("movies")

  var sideIncome=getElementValue('Sincome')
  var income=getElementValue('income')
  var profilePic=getElementValue('profilePic')
  var age=getElementValue('age')
  var Bio=getElementValue('Bio')

  console.log(`FirstName:${firstname},
               LastName: ${lastname},
               Email: ${email},
               Password: ${password},
               ConfirmPassword: ${confirmPassword},
               Gender: ${gender},
               Hobbies: ${hobbies},
                SideIncome:${sideIncome},
                income:${income},
                profilePic:${profilePic},
                age:${age},
                Bio : ${Bio}`)

}

const getElementValue=(id)=>{
  return document.getElementById(id).ariaValueMax;
}