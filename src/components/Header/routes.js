import Home from '../../pages/Home/Home.js'
import Cafe from '../../pages/Cafe/Cafe.js'
import Upcoming from '../../pages/Upcoming/Upcoming.js'
import Support from '../../pages/Support/Support.js'
import SignIn from '../../pages/Sign/SignIn.js'
import SignUp from '../../pages/Sign/SignUp.js'

export let routes = [
    {
         path: '/',
         element: <Home />
    },
    {
        path: '/cafe',
        element: <Cafe/>
    },
    {
        path: '/upcoming',
        element: <Upcoming/>
    },
    {
        path: '/support',
        element: <Support/>
    },
    {
        path: '/signin',
        element: <SignIn/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
]