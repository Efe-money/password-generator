import React from 'react';
import { digits, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Characters';
import { useState } from 'react';
import './Generator.css';

const Generator = () => {
  const [password, setpassword] = useState('');
  const [includedigits, setincludedigits] = useState(false);
  const [passwordLength, setpasswordLength] = useState(''); // Changed initial value to an empty string
  const [includeUppercase, setincludeUppercase] = useState(false);
  const [includeLowercase, setincludeLowercase] = useState(false);
  const [includeSymbols, setincludeSymbols] = useState(false);

  const handleGenerate = (e) => {
      e.preventDefault()
    if (!includeUppercase && !includeSymbols && !includedigits && !includeLowercase) {
         notify("You need to select at least one checkbox");
    } else {
      let characterList = "";
      if (includedigits) {
        characterList = characterList + digits;
      }
      if (includeUppercase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }
      if (includeLowercase) {
        characterList = characterList + lowerCaseLetters;
      }

      if (!isNaN(passwordLength) && parseInt(passwordLength) >= 8) {
            const generatedPassword = createPassword(characterList); // Generate the password
            setpassword(generatedPassword); // Update the state with the generated password
            alert("Password generated successfully");
          } else {
            alert ("Invalid password length. Please enter a valid number >= 8.");
          }
    
    }
  }

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  }

  return (
      <div className="cont">
    <div className='container'>
      <form className='formStyle' onSubmit={handleGenerate}>
        <div className="firstCont">
          {/* form title */}
          <div className="header">
            <h5>Password Generator</h5>
          </div>

          {/* form input */}
          <div className="">
            <h3>{password}</h3>
          </div>

          {/* for password length */}
          <div className="form-group">
            <label htmlFor="length">Length</label>
            <input
              type="number"
              id="password-strength"
              name="password-strength"
              value={passwordLength}
              max="20"
              min="8"
              onChange={(e) => setpasswordLength(e.target.value)}
              required
            />
          </div>
          

            {/* for passwordlowercase option */}
                  <div className="form-group">
                  <label htmlFor="Lowercase">Lowercase letters</label>
                  <input type="checkbox" checked={includeLowercase} onChange={(e)=> setincludeLowercase(e.target.checked)}/>
                  </div>

                  {/* for passworduppercase option */}
                  <div className="form-group">
                  <label htmlFor="Uppercase">Uppercase letters</label>
                  <input type="checkbox" checked={includeUppercase} onChange={(e)=> setincludeUppercase(e.target.checked)}/>
                  </div>

                  {/* for password to include digits */}
                  <div className="form-group">
                  <label htmlFor="digits">Digits</label>
                  <input type="checkbox" checked={includedigits} onChange={(e)=> setincludedigits(e.target.checked)} />  
                  </div>

                  {/* for password to include special characters */}
                  <div className="form-group">
                  <label htmlFor="Characters">Special characters</label>
                  <input type="checkbox" checked={includeSymbols}onChange={(e)=> setincludeSymbols (e.target.checked)}/>
                  </div>
                  <div className="formBtn">
                  <button className='bg-primary' type='submit'>Generate password</button>
                  </div>


        
        </div>
      </form>
    </div>
    </div>
  );
}

export default Generator;
