import { Request, Response } from "express";

/*
 *** All the routes related to Authentication are present here ***
 */

// This handler verifies the user's session on its arrival .

export const authenticateUserHandler = async (req: Request, res: Response) => {
  try {
    //Logic for User Authentication from middleware and sending data on every refresh
  } catch (error: any) {
    if (error.message) {
      res.status(406).json({ message: error.message }).end();
    } else {
      res.status(500).json({ message: "Something Went Wrong" });
    }
  }
};

// This function generates Access And Refresh Token for the user during Register and login .

const generateRefreshAndAccessToken = async () => {
  try {
    //Logic to generate Refresh and Access Tokens
  } catch (error) {}
};
/*
 * This handler handles user signup.
 * send POST Request at /api/v1/auth/register
 * body contains {firstName, LastName, mobile, email(optional), password}
 */

export const registerUserHandler = async (req: Request, res: Response) => {
  try {
    //Logic for User Registration
  } catch (error: any) {
    if (error.message) {
      res.status(406).json({ message: error.message }).end();
    } else {
      res.status(500).json({ message: "Something Went Wrong" });
    }
  }
};

/*
 * This handler handles user logins.
 * send POST Request at /api/v1/user/login
 * body contains {Mobile Number/email, password}
 */

export const loginUserHandler = async (req: Request, res: Response) => {
  try {
    //Logic for User Login
  } catch (error: any) {
    if (error.message) {
      res.status(406).json({ message: error.message }).end();
    } else {
      res.status(500).json({ message: "Something Went Wrong" });
    }
  }
};

/*
 * This handler handles user logOuts.
 * send POST Request at /api/v1/user/logOut
 */

export const logOutHandler = async (req: Request, res: Response) => {
  //This logic is for user logOut by removing cookies , feel free to modify it as per your use case
  res
    .status(200)
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({ message: "logged Out Successfully" });
};

/*
 * This handler handles refresh user's accessToken.
 * send POST Request at /api/v1/user/refreshToken
 */

export const refreshAccessTokenHandler = async (
  req: Request,
  res: Response
) => {
  try {
    //Logic to generate new Refresh and Access Token for user and sending it
  } catch (error: any) {
    if (error.message) {
      res.status(406).json({ message: error.message }).end();
    } else {
      res.status(500).json({ message: "Something Went Wrong" });
    }
  }
};
