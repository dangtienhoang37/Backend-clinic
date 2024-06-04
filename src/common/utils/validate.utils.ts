import message from "../constant/message";
import { ApiStatusCode } from "../enum/apiStatusCode";

export default class Validate {
  public static userName = (value) => {
      const regex = new RegExp('^[a-zA-Z0-9.]+$');
      return regex.test(value);
  }
  public static email = (value) => {
      const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
      return regex.test(value) || value === "";
  }
  public static phoneNumber = (value) => {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)
  }
  public static fullName = (value) => {
      const regex = new RegExp('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$');
      return regex.test(value);
  }
  public static identification = (value) => {
      const regex = new RegExp('^[0-9]{12}$');
      return regex.test(value) || value === "";
  }
  public static insurance = (value) => {
      return value.length === 10;
  }
  public static dateOfBirth = (value: string) => {
    const regex = new RegExp('^(0?[1-9]|1[0-2])\\/(0?[1-9]|[12][0-9]|3[01])\\/\\d{4}$');
    return regex.test(value);
  }
  public static validateDob = (dob, next) => {
    if(!Validate.dateOfBirth(dob)) {
      const err: any = new Error(message.invalidDateOfBirth());
      err.statusCode = ApiStatusCode.BadRequest;
      return next(err)
    }
  }
  
}