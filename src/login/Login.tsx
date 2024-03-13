import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { ILogin, ILoginRequestParams } from '../models/login/Login';
import { useAppDispatch } from "../store/hooks";
import { LoginSubmit } from './LoginAction';
import LoginStyle from './LoginStyle';

const Login = () => {
  const dispatch = useAppDispatch()
  const [loginData, setLoginData] = useState<ILogin>({indexName: '', contactNumber: ''});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev, [name]: value
    }));
  }

  const validate = () => {
    if (!loginData.indexName || loginData.indexName.trim().length <= 0) {
      return false;
    }
    if (!loginData.contactNumber || loginData.contactNumber.trim().length <= 0) {
      return false;
    }

    return true;
  }

  const handlSubmit = () => {
    const requestParams: ILoginRequestParams = {
      data: {
        indexName: loginData.indexName,
        contactNumber: loginData.contactNumber,
      }
    }
    dispatch(LoginSubmit(requestParams))
  }

  return (
    <Box>
      <Card sx={LoginStyle.card}>
        <Typography sx={LoginStyle.heading}>Login</Typography>
        <Box component="form" autoComplete="off">
        <Box sx={{ padding: '1rem' }}>
          <Box sx={LoginStyle.fieldSectionBox}>
            {/* <Box sx={LoginStyle.labelBox}>
              <Typography>Name: </Typography>
            </Box> */}
            <Box sx={LoginStyle.fieldBox}>
              <TextField
                label="Name*"
                sx={LoginStyle.field}
                type="text"
                name="indexName"
                value={loginData.indexName}
                onChange={handleChange}
                autoComplete="off"
                // helperText="field can't be empty."
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>
          <Box sx={LoginStyle.fieldSectionBox}>
            {/* <Box sx={LoginStyle.labelBox}>
              <Typography>Contact Number: </Typography>
            </Box> */}
            <Box sx={LoginStyle.fieldBox}>
              <TextField
                label="Contact Number*"
                sx={LoginStyle.field}
                type="text"
                name="contactNumber"
                value={loginData.contactNumber}
                onChange={handleChange}
                autoComplete="off"
                // helperText="field can't be empty."
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>
        </Box>
        
        <Box sx={LoginStyle.btnBox}>
          <Button disabled={!validate()} sx={LoginStyle.btn} type="button" onClick={handlSubmit} >Login</Button>
        </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Login;
