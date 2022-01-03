import { Button } from "@mui/material"
import axios, { AxiosRequestConfig } from "axios"

// nullish coalescing
// if this part is null, make it the other one
export const clientId = process.env.REACT_APP_CLIENT_ID ?? ""
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET ?? ""
export const redirectUri = process.env.REACT_APP_REDIRECT_URL ?? ""
export const scopes = "user-read-private%20user-read-email"

async function getAuth() {
  const url =
    "https://accounts.spotify.com/authorize?" +
    "response_type=code&" +
    `client_id=${clientId}&` +
    `redirect_uri=${encodeURI(redirectUri)}&` +
    `scope=${scopes}`

  console.log(url)

  try {
    axios.get(url).then(function (response: any) {
      // handle success
      // extract token from response for use in other requests
      window.location.href = url
    })
  } catch (error) {
    console.log(error)
  }
}

export const Auth = () => {
  return (
    <div
      style={{
        backgroundImage: "conic-gradient(#FFEC8B, #FFDDF4, #FFEC8B)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={getAuth}
        style={{
          fontFamily: "Luxurious Roman",
          textTransform: "none",
          backgroundColor: "#ffffff",
          alignSelf: "center",
        }}
        variant="outlined"
      >
        check in with spotify
      </Button>
    </div>
  )
}
