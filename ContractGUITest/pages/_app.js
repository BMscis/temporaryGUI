import '../styles/globals.css'
import ReachAuthContextProvider from '../Context/ReachContext'
import{Amplify} from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
// https://yk8yxgwk26.execute-api.us-east-1.amazonaws.com/dev
function MyApp({ Component, pageProps }) {
  return (
    <>
    <ReachAuthContextProvider>
    <Component {...pageProps} />
    </ReachAuthContextProvider>
    </>
  )
}

export default MyApp
