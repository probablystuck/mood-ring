import axios, { AxiosResponse } from "axios"
import qs from "qs"
import { useEffect } from "react"
import { clientId, clientSecret, redirectUri } from "./Auth"

interface Token {
  accessToken: string
  refreshToken: string
}

function getCode(): any {
  const queryString = window.location.search

  if (queryString) {
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get("code")
  }
}

function fetchAccessToken(code: string) {
  const url = "https://accounts.spotify.com/api/token"
  const data = qs.stringify({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  })

  axios
    .post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(function (response: AxiosResponse) {
      if (response.data.access_token != null && response.data.refresh_token) {
        return {
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        }
      }
    })
}

export const Redirect = () => {
  useEffect(() => {
    const code = getCode()
    const token = fetchAccessToken(code)
    console.log(token)
  }, [])

  return <div>you made it TF IN BITCH!!!!! LETS GOOOO</div>
}
