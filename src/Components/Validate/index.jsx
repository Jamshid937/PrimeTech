import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import classNames from 'classnames'
import $ from 'jquery'
import swal from 'sweetalert';
import classes from './Validate.module.css'
import mainLogo from '../../imgs/mainLogo.png'
import { validateName, validatePhoneContent, validatePhoneNumber, validateText,validateTextTwo } from './halper'

const initialData ={
  name: '',
  tell: '',
  text: '',
  textTwo: '',
  }
const Validate = () => {
  const { t, i18n } = useTranslation();
  const [fields,setFields] = useState(initialData)
  const [disablad, setDisablad] = useState(true)
  useEffect(() => {
   const isValid =
   validateName(fields.name) &&
    validatePhoneNumber(fields.tell) &&
    validateText(fields.text)&&
    validateTextTwo(fields.textTwo);
    setDisablad(!isValid)

  },[fields])
  const handleChange = (e) => {
    if (e.target.name === 'tell' && !validatePhoneContent(e.target.value)) return
    setFields((prev) => ({...prev, [e.target.name] : e.target.value}))

  }
  var telegram_bot_id = "6044421804:AAHHoJoX1szgVpwZBVxVxiAH6YKtBHzlL2M";
  var chat_id = 5317445546; 
  var u_name, tell, message, messageTwo;
  var ready = function() {
      u_name = fields.name;
      tell = fields.tell;
      message = fields.text;
      messageTwo = fields.textTwo
      message = "Ismi: " + u_name + "\nTell: " + tell + "\nBiznes: " + message + "\nMuammo" + messageTwo;
  };

  var sendtelegram = function(e) {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
    });
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Jo`natildi!",
    });

 setFields(initialData)
e.preventDefault()

    
};
  return (
    <div className={classes['Validate']} id='validate'>
      <div className={classes['validate__back']}> 
        <div className={classes['validate__logo']}>
           <img src={mainLogo} alt="" />
        </div>
      </div>

        <div>
            <h2 className={classes['validate__title']}>{t('h11')}</h2>
            <form className={classes['validate__form']} onSubmit={sendtelegram}>
                 <input type="text" value={fields.name}  onChange={handleChange} name='name'  placeholder={t('input')}/>
                 <input type="tel" value={fields.tell} onChange={handleChange} name='tell' placeholder={t('input1')}/>
                 <input type="text" onChange={handleChange}   value={fields.text}  name='text' placeholder={t('input2')}/>
                 <input type="text" onChange={handleChange}   value={fields.textTwo} name='textTwo' placeholder={t('input3')}/>
                 <button
            
            className={classNames(classes['order-form__btn'], {
              [classes['order-form__btn_disabled']]: disablad,
            })}
            disabled={disablad}
          >
           {t('btn4')}
          </button>
            </form>
        </div>
    </div>
  )
}

export default Validate
