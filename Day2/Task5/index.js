import {initializeApp} from 'firebase/app'


const firebaseApp=initializeApp({

// your firebase code
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
