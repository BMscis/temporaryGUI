import { API } from "aws-amplify"

export default async function addLiquidity(fee) {
    const endpoint = " https://y907h2x4s9.execute-api.us-east-2.amazonaws.com/dev"
    const apiName = "JASIRIPOOLAPI"
    const fun = "ADDLIQUIDITY"
    const path = "/pool"
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        response: false,
        body: {
            "fee": fee.toString()
        }
    }

    API.post(apiName, path, options)
        .then((res) => {
            console.log("RESPONSE: ", res)
            return res
        })
        .catch((err) => {
            console.log("Error: ", err)
            return err
        })
}